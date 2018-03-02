import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Score } from './score';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scores: Score[];

  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.scores = this.appComponent.scoreboard;
  }

}
