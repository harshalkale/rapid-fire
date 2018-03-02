import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Score } from './scoreboard/score';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should initialize the scoreboard`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.scoreboard).toBeTruthy();
    expect(app.scoreboard.constructor).toEqual(Array);
    expect(app.scoreboard.length).toEqual(0);
  }));
  it(`should initialize the updateScoreboard method`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.updateScoreboard).toBeTruthy();
  }));

  describe('updateScoreboard', () => {

    it(`should update the scoreboard`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      const score: Score = {
        name: 'Test 1',
        score: 100
      };
      app.updateScoreboard(score);
      expect(app.scoreboard).toEqual([{
        name: 'Test 1',
        score: 100
      }]);
    }));
  });
});
