import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizzComponent } from './components/quizz/quizz.component';
import { QuizzQuestionsComponent } from './components/quizz-questions/quizz-questions.component';
import { QuizzOptionsComponent } from './components/quizz-options/quizz-options.component';
import { QuizzResultsComponent } from './components/quizz-results/quizz-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizzComponent,
    QuizzQuestionsComponent,
    QuizzOptionsComponent,
    QuizzResultsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
