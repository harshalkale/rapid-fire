import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../player/player';
import { Question } from '../question/question';
import { EvaluatorService } from '../evaluator/evaluator.service';
import { TimerComponent } from '../timer/timer.component';
import { QuestionService } from '../question/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [EvaluatorService]
})
export class QuizComponent implements OnInit {

  player: Player;

  questions: Question[];

  @ViewChild(TimerComponent)

  private timer: TimerComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private evaluatorService: EvaluatorService,
    private questionService: QuestionService) { }

  ngOnInit() {
    this.evaluatorService.player.name = this.route.snapshot.paramMap.get('name');
    this.player = this.evaluatorService.player;
    if (!this.player.name) {
      this.router.navigate(['/home']);
    }
    this.timer.timeout = this.evaluatorService.timeout;
    this.timer.interval = 0;
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = this.evaluatorService.questions = questions;
      this.timer.start();
    });
  }

  timerCompleteEvent($event) {
    this.timer.timeout = $event;
    this.evaluate();
  }

  evaluate() {
    this.timer.clearTimer();
    this.evaluatorService.evaluate(this.timer.timeout, () => {
      this.router.navigate(['/scoreboard']);
    });
  }

}
