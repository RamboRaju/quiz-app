import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuizViewComponent } from './pages/quiz-view/quiz-view.component';
import { QuestionViewComponent } from './pages/question-view/question-view.component';
import { ResultViewComponent } from './pages/result-view/result-view.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizViewComponent,
    QuestionViewComponent,
    ResultViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
