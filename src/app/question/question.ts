export class Question {
    id: number;
    question: string;
    options: Option[];
    correctOption: Option;
    selectedOption?: Option;
}

class Option {
    number: Number;
    answer: string;
}
