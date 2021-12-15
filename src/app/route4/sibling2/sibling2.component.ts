import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  timeLimit = 0;
  isStart = false;
  isPause = false;
  showPausedAt:number=0;
  constructor(private commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.commonService.showPausedAt.subscribe(d=>this.showPausedAt=d)
  }
  start() {
    this.isStart = !this.isStart;
    this.commonService.isReset=false;
    this.commonService.isStartOrPause.next({
      isStart: this.isStart,
      isPause: this.isPause
    })
    if (this.isStart) {
      this.commonService.passTimeValue.next(this.timeLimit);
      this.isPause = false;
      this.isStart = true;
      this.commonService.isReset=false;
    }
    else {
      this.isPause = true;
      this.isStart = false;
      this.commonService.isReset=false;
      this.commonService.isStartOrPause.next({
        isStart: this.isStart,
        isPause: this.isPause
      })
    }
  }
  reset() {
      this.timeLimit=0;
      this.commonService.isReset=true;
      this.commonService.passTimeValue.next(this.timeLimit);
      
    // this.isPause = true;
    // this.isStart = false;
    // this.timeLimit = 0;
    // this.commonService.passTimeValue.next(this.timeLimit)
    // this.commonService.isStartOrPause.next({
    //   isStart: this.isStart,
    //   isPause: this.isPause
    // })
  }
}
