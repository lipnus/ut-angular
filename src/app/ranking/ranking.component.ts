import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(
    private router: Router,
    private _location: Location) { }

  ngOnInit() {
  }

  onClick_back(){
    this._location.back();
  }

}
