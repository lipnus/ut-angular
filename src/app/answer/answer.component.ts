import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

//[service]
import { GlobalService } from '../service/index';
import { PostToServerService } from '../service/index';

//[model]
import { MusicInfo } form '../model/index';
import * as mGlobal from '../global-variables';  //전역변수

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  youtubePath;
  count;

  music_pk:number; //quiz.ts에서 받아온 값
  musicInfo:MusicInfo;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private domSanitizer : DomSanitizer,
    private globalService: GlobalService,
    private postToServerService: PostToServerService,
    private http: HttpClient, ) { }

  ngOnInit() {

    //주소뒤에 붙은 숫자 가져오기
    this.music_pk = this.activeRoute.snapshot.paramMap.get('music_pk');
    this.postMusic(this.music_pk);

  }

  postMusic(music_pk:number){
    let path = '/music';
    let postData = {user_pk:0, music_pk:music_pk};

    this.postToServerService.postServer(path, postData).subscribe(data => {
      this.musicInfo = data;

      console.log("유튭: " +this.musicInfo.youtube);

      //유튜브 경로설정
      this.setYoutubePath(this.musicInfo.youtube);
    });
  }

  //경로 지정
  setYoutubePath(fullPath){
    let pathArray;

    if(fullPath.indexOf('/')){
      pathArray = fullPath.split("/");
    }else{
      pathArray = fullPath.split("=");
    }

    this.youtubePath = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + pathArray[pathArray.length-1] + '?autoplay=1');

  }

  onClick_next(){
    if(this.globalService.gameCount > 2){
        this.globalService.gameCount = 1;
        this.router.navigate(['/result']);
    }else{
      this.router.navigate(['/quiz']);
      this.globalService.gameCount++;
    }


  }


}
