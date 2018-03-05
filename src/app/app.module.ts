import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { EvaluatorService } from './evaluator/evaluator.service';
import { QuestionService } from './question/question.service';
import { ScoreboardService } from './scoreboard/scoreboard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { TimerComponent } from './timer/timer.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    QuestionComponent,
    TimerComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EvaluatorService, QuestionService, ScoreboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
