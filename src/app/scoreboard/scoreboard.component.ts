import { Component, OnInit } from '@angular/core';
import { Score } from './score';
import { ScoreboardService } from './scoreboard.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  scoreboard: Score[];

  constructor(private scoreboardService: ScoreboardService) { }

  ngOnInit() {
    this.scoreboardService.getScoreboard().subscribe(scoreboard => this.scoreboard = scoreboard);
  }

}
