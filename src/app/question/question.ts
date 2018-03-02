export class Question {
    number: number;
    question: string;
    options: Option[];
    correctOption: Option;
    selectedOption?: Option;
}

class Option {
    number: Number;
    answer: string;
}
