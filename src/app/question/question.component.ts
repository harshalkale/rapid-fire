import { Component, OnInit, Input } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  constructor() { }

  ngOnInit() {
  }

  evaluateAnswer(optionNumber: number) {
    this.question.selectedOption = this.question.options.find(option => option.number === optionNumber);
  }
}
