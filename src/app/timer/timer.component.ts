import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnDestroy {

  private _interval: number;
  private _timeout: number;

  get interval(): number { return this._interval; }
  @Input() set interval(interval: number) {
    this._interval = interval;
  }

  get timeout(): number { return this._timeout; }
  @Input() set timeout(timeout: number) {
    this._timeout = timeout;
  }

  @Output() timerCompleteEvent = new EventEmitter<number>();
  constructor() { }

  clearTimer() { clearInterval(this._interval); }

  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop() {
    this.clearTimer();
  }

  private countDown() {
    this.clearTimer();
    this._interval = window.setInterval(() => {
      this._timeout -= 1;
      if (this._timeout === 0) {
        this.timerCompleteEvent.emit(this._timeout);
        this.clearTimer();
      }
    }, 1000);
  }

}
