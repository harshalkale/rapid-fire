import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Player } from '../player/player';
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

  private _questions: Question[];

  @ViewChild(TimerComponent)

  private timer: TimerComponent;

  get questions(): Question[] { return this.evaluatorService.questions; }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private evaluatorService: EvaluatorService) { }

  ngOnInit() {
    this.evaluatorService.player.name = this.route.snapshot.paramMap.get('name');
    this.player = this.evaluatorService.player;
    if (!this.player.name) {
      this.router.navigate(['/home']);
    }
    this.timer.timeout = this.evaluatorService.timeout;
    this.timer.interval = 0;
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
