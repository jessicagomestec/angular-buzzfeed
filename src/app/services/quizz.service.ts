import { Injectable } from '@angular/core';
import quizz_questions from "../../assets/data/quizz_questions.json";


@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  title: string = quizz_questions.title;
  questions: any[] = quizz_questions.questions;
  results: { [key: string]: string } = quizz_questions.results;
  answers: string[] = [];
  questionIndex: number = 0;
  finished: boolean = false;
  answerSelected: string = "";

  constructor() {
    console.log("Dados carregados:", this.questions);
   }


  getCurrentQuestion() {
    return this.questions[this.questionIndex];
  }

  playerChoose(value: string) {
    this.answers.push(value);
    this.nextStep();
  }

  private nextStep() {
    this.questionIndex ++;

    if (this.questionIndex < this.questions.length) {
      return;
    } else {
      this.finished = true;
      this.answerSelected = this.results[this.checkResult()];
    }
  }

  private checkResult(): string {
    return this.answers.reduce((prev, curr, _, arr) =>
      arr.filter(v => v === prev).length > arr.filter(v => v === curr).length ? prev : curr
    );
  }

  reset() {
    this.answers = [];
    this.questionIndex = 0;
    this.finished = false;
    this.answerSelected = "";
  }
}
