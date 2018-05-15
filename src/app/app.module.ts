// [Module]
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.route';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// [Service]
import { GlobalService } from './service/global.service';

// [Component]
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RankingComponent } from './ranking/ranking.component';
import { InformationComponent } from './information/information.component';
import { QuizComponent } from './quiz/quiz.component';
import { AnswerComponent } from './answer/answer.component';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    MainpageComponent,
    RankingComponent,
    InformationComponent,
    QuizComponent,
    AnswerComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [
    GlobalService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
