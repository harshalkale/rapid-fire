import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Score } from './score';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class ScoreboardService {

  scoreboardUrl = 'http://localhost:3000/scoreboard/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getScoreboard(): Observable<Score[]> {
    return this.http.get<Score[]>(this.scoreboardUrl);
  }

  updateScoreboard(score: Score): Observable<Score> {
    return this.http.put<Score>(this.scoreboardUrl, score, this.httpOptions);
  }

  addScoreboard(score: Score): Observable<Score> {
    return this.http.post<Score>(this.scoreboardUrl, score, this.httpOptions);
  }

  deleteScoreboard(score: Score): Observable<Score> {
    return this.http.delete<Score>(this.scoreboardUrl + score.id);
  }

}
