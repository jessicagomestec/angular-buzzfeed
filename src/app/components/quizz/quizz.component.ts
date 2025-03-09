import { Component, Input, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent  {

  constructor(public quizzService: QuizzService) {}

  resetQuiz() {
    this.quizzService.reset();
  }

}
