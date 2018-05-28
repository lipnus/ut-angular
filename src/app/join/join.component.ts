import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

//[service]
import { GlobalService } from '../service/index';
import { PostToServerService } from '../service/index';

//[model]
import { MusicInfo } from '../model/index';
import * as mGlobal from '../global-variables';  //전역변수

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css', '/join.component-input.css']
})
export class JoinComponent implements OnInit {

  nicknameStr:string;
  contactStr:string;

  constructor(
    private router: Router,
    private globalService: GlobalService,
    private postToServerService: PostToServerService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.nicknameStr="";
    this.contactStr="";
  }

  public postUser(){
    let path = '/user';
    let postData = {name:"황선필", nickname:this.nicknameStr, contact:this.contactStr, age:24};

    this.postToServerService.postServer(path, postData).subscribe(data => {
      this.router.navigate(['/mainpage']);
    });
  }


  public onClick_join(){
    if(this.nicknameStr.length == 0){
      alert("닉네임을 입력해주세요");
    }else if(this.nicknameStr.length > 8){
      alert("닉네임은 8자 이내로 작성해주세요");
    }else if(this.contactStr.length == 0){
      alert("연락처를 입력해주세요");
    }else{
      this.postUser();
    }
  }



}
