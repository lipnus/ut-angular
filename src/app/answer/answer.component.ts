import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";
import { GlobalService } from '../service/global.service';
import * as mGlobal from '../global-variables';  //전역변수

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  youtubePath;
  count;

  constructor(
    private router: Router,
    private domSanitizer : DomSanitizer,
    private globalService: GlobalService ) { }

  ngOnInit() {

    //테스트용 경로
    this.setYoutubePath("https://youtu.be/tXV7dfvSefo");
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
