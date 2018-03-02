import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../player/player';
import { Quiz } from './quiz';
import { Question } from '../question/question';
import { EvaluatorService } from '../evaluator/evaluator.service';
import { TimerComponent } from '../timer/timer.component';

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

  constructor(private router: Router, private route: ActivatedRoute, private evaluatorService: EvaluatorService) {
    this.evaluatorService.player.name = this.route.snapshot.paramMap.get('name');
    this.evaluatorService.questions = new Quiz().getQuestions;
  }

  ngOnInit() {
    this.player = this.evaluatorService.player;
    if (!this.player.name) {
      this.router.navigate(['/home']);
    }
    this.questions = this.evaluatorService.questions;
    this.timer.timeout = this.evaluatorService.timeout;
    this.timer.interval = 0;
  }

  timerCompleteEvent($event) {
    this.timer.timeout = $event;
    this.evaluate();
  }

  evaluate() {
    this.timer.clearTimer();
    this.evaluatorService.evaluate(this.timer.timeout);
    this.router.navigate(['/scoreboard']);
  }

}