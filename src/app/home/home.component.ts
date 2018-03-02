import { Component, OnInit } from '@angular/core';
import { Player } from '../player/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  player: Player;

  constructor(private router: Router) { }

  ngOnInit() {
    this.player = { name: '', score: 0 };
  }

  play() {
    this.router.navigate(['/quiz', { name: this.player.name }]);
  }

}
