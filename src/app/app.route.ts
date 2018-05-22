import { Routes, RouterModule } from '@angular/router';
import {NgModule} from "@angular/core";

//[Component]
import { SplashComponent } from './splash/splash.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RankingComponent } from './ranking/ranking.component';
import { InformationComponent } from './information/information.component';
import { QuizComponent } from './quiz/quiz.component';
import { AnswerComponent } from './answer/answer.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [

  { path: '', component: SplashComponent },
  { path: 'splash', component: SplashComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'information', component: InformationComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'answer', component: AnswerComponent },
  { path: 'answer/:music_pk', component: AnswerComponent },

  { path: 'result', component: ResultComponent },
  { path: '**', redirectTo: ''}

];


@NgModule({
  imports: [ RouterModule .forRoot (routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
