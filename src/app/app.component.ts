import { Component } from '@angular/core';
import { Score } from './scoreboard/score';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _scoreboard: Score[];

  constructor () {
    this._scoreboard = [];
  }

  updateScoreboard(score: Score) {
    this._scoreboard.push(score);
    this._scoreboard.sort((a, b) => b.score - a.score);
    this._scoreboard = this._scoreboard.slice(0, 5);
  }

  get scoreboard(): Score[] {
    return this._scoreboard;
  }
}
