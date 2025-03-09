import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-quizz-options',
  templateUrl: './quizz-options.component.html',
  styleUrls: ['./quizz-options.component.css']
})
export class QuizzOptionsComponent implements OnInit {


  constructor(public quizzService: QuizzService) { }

  chooseOption(optionAlias: string) {
    this.quizzService.playerChoose(optionAlias);
  }
  ngOnInit(): void {
  }

}
