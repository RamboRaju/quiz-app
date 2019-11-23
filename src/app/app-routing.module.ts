import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizViewComponent } from './pages/quiz-view/quiz-view.component';
import { ResultViewComponent } from './pages/result-view/result-view.component';
import { QuestionViewComponent } from './pages/question-view/question-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quizes', component: QuizViewComponent },
  { path: 'result', component: ResultViewComponent },
  { path: 'question/:id', component: QuestionViewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
