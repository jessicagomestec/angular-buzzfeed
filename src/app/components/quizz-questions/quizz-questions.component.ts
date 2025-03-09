import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-quizz-questions',
  templateUrl: './quizz-questions.component.html',
  styleUrls: ['./quizz-questions.component.css']
})
export class QuizzQuestionsComponent implements OnInit {


  constructor(public quizzService: QuizzService) {

  }

  ngOnInit(): void {
  }

}
