import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Quiz } from '../quiz/quiz';
import { Question } from '../question/question';
import { Player } from '../player/player';
import { AppComponent } from '../app.component';
import { Score } from '../scoreboard/score';

const TIMEOUT = 60;

@Injectable()
export class EvaluatorService {

  player: Player = {
    name: '',
    score: 0
  };
  questions: Question[] = [];
  timeout: number;


  constructor(private appComponent: AppComponent) {
    this.timeout = TIMEOUT;
  }

  evaluate(timeout: number) {
    timeout = timeout === 0 ? 1 : timeout;
    const rightAnswers = this.questions.filter(question => {
      if (!question.selectedOption) { return false; }
      return !!question.options.find(option => question.correctOption.number === question.selectedOption.number);
    }).length;

    const score: Score = {
      name: this.player.name,
      score: (timeout * rightAnswers)
    };

    this.appComponent.updateScoreboard(score);
  }

}
