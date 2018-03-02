import { TestBed, inject, async } from '@angular/core/testing';

import { EvaluatorService } from './evaluator.service';
import { AppComponent } from '../app.component';
import { Player } from '../player/player';
import { Question } from '../question/question';

describe('EvaluatorService', () => {
  beforeEach(() => {
    let appComponent: AppComponent;
    TestBed.configureTestingModule({
      providers: [
        EvaluatorService,
        { provide: AppComponent, useClass: AppComponent }
      ]
    });
    appComponent = TestBed.get(AppComponent);
  });

  it('should be created', inject([EvaluatorService], (service: EvaluatorService) => {
    expect(service).toBeTruthy();
  }));
  it('should define player', inject([EvaluatorService], (service: EvaluatorService) => {
    expect(service.player).toBeTruthy();
  }));
  it('should define questions', inject([EvaluatorService], (service: EvaluatorService) => {
    expect(service.questions).toBeTruthy();
    expect(service.questions.constructor).toEqual(Array);
  }));
  it('should define timeout', inject([EvaluatorService], (service: EvaluatorService) => {
    expect(service.timeout).toBeTruthy();
    expect(typeof service.timeout).toEqual('number');
  }));
  it('should define the evaluate method', inject([EvaluatorService], (service: EvaluatorService) => {
    expect(service.evaluate).toBeTruthy();
  }));
});
