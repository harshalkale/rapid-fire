import { Component, OnInit } from '@angular/core';
import { Player } from '../player/player';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  player: Player;
  playerForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.player = { name: '' };
    this.playerForm = new FormGroup({
      name: new FormControl(this.player.name, [ Validators.required ])
    });
  }

  play() {
    this.player = this.playerForm.value;
    this.router.navigate(['/quiz', { name: this.player.name }]);
  }

}
