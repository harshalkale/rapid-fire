import { Injectable } from '@angular/core';
import { Question } from '../question/question';
import { Player } from '../player/player';
import { Score } from '../scoreboard/score';
import { QuestionService } from '../question/question.service';
import { ScoreboardService } from '../scoreboard/scoreboard.service';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';

const TIMEOUT = 60;

@Injectable()
export class EvaluatorService {

  player: Player = { name: '', score: 0 };
  questions: Question[];
  timeout = TIMEOUT;

  constructor(private questionService: QuestionService, private scoreboardService: ScoreboardService) {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(questions => this.questions = questions);
  }

  evaluate(timeout: number, callback: Function) {
    timeout = timeout === 0 ? 1 : timeout;
    const rightAnswers = this.questions.filter(question => {
      if (!question.selectedOption) { return false; }
      return !!question.options.find(option => question.correctOption.number === question.selectedOption.number);
    }).length;

    const playerScore: Score = {
      id: 99,
      name: this.player.name,
      score: (timeout * rightAnswers)
    };

    this.scoreboardService.getScoreboard().subscribe(currentScoreboard => {
      let newScoreboard: Score[] = currentScoreboard.map(x => Object.assign({}, x));
      newScoreboard.push(playerScore);

      newScoreboard.sort((a, b) => b.score - a.score);
      newScoreboard.forEach((score, index) => score.id = index + 1);

      newScoreboard = newScoreboard.slice(0, 5);

      if (newScoreboard.length === 1) {
        this.scoreboardService.addScoreboard(newScoreboard[0]).subscribe(score => console.log('score saved', score));
      } else {
        const parallelDeleteOps: Observable<Score>[] = [];
        currentScoreboard.forEach((score) => {
          parallelDeleteOps.push(this.scoreboardService.deleteScoreboard(score));
        });
        forkJoin(parallelDeleteOps).subscribe(deleteResults => {
          console.log(deleteResults);
          const parallelAddOps: Observable<Score>[] = [];
          newScoreboard.forEach((score) => {
            parallelAddOps.push(this.scoreboardService.addScoreboard(score));
          });
          forkJoin(parallelAddOps).subscribe(addResults => {
            console.log(addResults);
            callback();
          });
        });
      }
    });
  }

}
