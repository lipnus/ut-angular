import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onClick_ranking(){
    this.router.navigate(['/ranking']);
  }

  onClick_mainpage(){
    this.router.navigate(['/mainpage']);
  }

}
