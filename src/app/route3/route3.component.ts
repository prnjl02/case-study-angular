import { Component, OnInit, ChangeDetectionStrategy,ViewChild } from '@angular/core';
import { Sibling1Component } from './sibling1/sibling1.component';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class Route3Component implements OnInit {
  timeLimitToChild: number = 0;
  isStartedToChild: boolean = false;
  isPausedToChild: boolean = false;
  updatedCounterValueToChild: number = 0;
  isPauseCountToChild:number=0;
  isStartCountToChild:number=0;
  isStartedTimeStamp:any;
  isPausedTimeStamp:any

  constructor() { }

  ngOnInit(): void {
  }

  getTimeLimit(value: number) {
    this.timeLimitToChild = value;
  }
  getIsStarted(value: boolean) {
    this.isStartedToChild = value;
    this.isPausedToChild = false;
  }
  getIsPaused(value: boolean) {
    this.isPausedToChild = value;
    this.isStartedToChild = false;
  }
  getUpdatedCounterValue(value: number) {
   this.updatedCounterValueToChild = value
  }
  getIsPauseCount(value:number){
this.isPauseCountToChild=value;
  }
  getIsStartCount(value:number){
  this.isStartCountToChild=value;
  }
  getIsPausedTimeStamp(value:Date){
this.isPausedTimeStamp=value;
  }
  getIsStartedTimeStamp(value:Date){
this.isStartedTimeStamp=value
  }
}
