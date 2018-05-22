import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//[service]
import { GlobalService } from '../service/index';
import { PostToServerService } from '../service/index';

//[model]
import { MusicInfo } form '../model/index';
import * as mGlobal from '../global-variables';  //전역변수

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  answerStr: string;
  isPlaying: number;

  musicInfo:MusicInfo;

  audio:Audio;


  constructor(
    private router: Router,
    private globalService: GlobalService,
    private postToServerService: PostToServerService,
    private http: HttpClient,) { }

  ngOnInit() {
    this.audio = new Audio();
    this.audioListener();

    this.isPlaying = 0;
    this.postMusic();
  }

  private ngOnChanges() {
    console.log("???");
  }

  postMusic(){
    console.log("postMusic()");

    let path = '/music';
    let postData = {user_pk:0, music_pk:0};

    this.postToServerService.postServer(path, postData).subscribe(data => {
      this.musicInfo = data;
    });
  }

  postAnswer(){
    let path = '/answer';
    let postData = {user_pk:0, music_pk:this.musicInfo.music_pk, answer:this.answerStr, try_count:1};
    this.postToServerService.postServer(path, postData).subscribe(data => {

      if(data.result == "correct"){
        this.router.navigate(['/answer/' + this.musicInfo.music_pk]);
      }

    });
  }

  audioListener(){
    //재생중일때
    this.audio.addEventListener("timeupdate", (currentTime)=>{
      console.log("cur: " + this.audio.currentTime);
      if( this.audio.currentTime>4){
        this.stopMusic();
      }
    });

    //최대길이가 변경되었을때
    this.audio.addEventListener("durationchange", (currentTime)=>{
      console.log("Duration: " + this.audio.duration);
    });

    //재생이 끝났을때
    this.audio.addEventListener("ended", (currentTime)=>{
      // console.log("Duration: " + this.audio.duration);
      console.log("끝!");
      this.stopMusic();
    });
  }

  stopMusic(){
    this.isPlaying = 0;
    this.audio.currentTime = 0;
    this.audio.pause();
  }

  startMusic(){
    console.log("음악시작");
    this.isPlaying = 1;
    this.audio.src = mGlobal.MusicPath + this.musicInfo.music_path;
    this.audio.load();
    this.audio.play();

    //2초부터 시작
    this.audio.currentTime = 2;
  }

  onClick_submit(){
    this.postAnswer();
  }

  onClick_play(){
    this.startMusic();
  }


}
