import { Question } from '../question/question';

export class Quiz {

  private questions: Question[] = [{
    number: 1,
    question: '1 + 2 = ?',
    options: [{ number: 1, answer: '1' }, { number: 2, answer: '5' }, { number: 3, answer: '3' }],
    correctOption: { number: 3, answer: '3' }
  }, {
    number: 2,
    question: '1 + 2 x 5 = ?',
    options: [{ number: 1, answer: '15' }, { number: 2, answer: '5' }, { number: 3, answer: '11' }],
    correctOption: { number: 3, answer: '11' }
  }, {
    number: 3,
    question: '34 - 10 + 2 = ?',
    options: [{ number: 1, answer: '43' }, { number: 2, answer: '26' }, { number: 3, answer: '25' }],
    correctOption: { number: 2, answer: '26' }
  }, {
    number: 4,
    question: '10 x 2 + 11 = ?',
    options: [{ number: 1, answer: '31' }, { number: 2, answer: '130' }, { number: 3, answer: '33' }],
    correctOption: { number: 1, answer: '31' }
  }, {
    number: 5,
    question: '16 / 4 + 2 = ?',
    options: [{ number: 1, answer: '2' }, { number: 2, answer: '4' }, { number: 3, answer: '6' }],
    correctOption: { number: 3, answer: '6' }
  }];

  get getQuestions(): Question[] { return this.questions; }
}
