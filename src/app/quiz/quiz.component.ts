import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../service/global.service';

import * as mGlobal from '../global-variables';  //전역변수

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  answerStr: string;
  isPlaying: number;

  constructor(
    private router: Router,
    private globalService: GlobalService) { }

  ngOnInit() {
    this.isPlaying = 0;
  }

  onClick_submit(){
    this.router.navigate(['/answer']);
  }

  onClick_play(){
    console.log("클릭");
    this.isPlaying = 1;
  }


}
