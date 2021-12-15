import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
  showCurrentTimerValue: number = 0;
  globalInterval: any;
  startCount = 0;
  pauseCount = 0;
  startTimeStamp:any;
  pausedTimeStamp:any;
  currentCounterValue:number=0;
  constructor(private commonService: CommonServiceService) { }

  ngOnInit(): void {

    this.commonService.isStartOrPause.subscribe(d => {


       if (d.isStart === false && d.isPause === true){        
       
        this.pauseCount = this.pauseCount + 1;
        console.log('paused');
        this.currentCounterValue=this.pauseCount;
        this.pausedTimeStamp=new Date();
        this.commonService.pausedCounter.next(this.pauseCount);
        this.commonService.pausedAtTimeStamp.next(this.pausedTimeStamp);
        this.commonService.showPausedAt.next(this.showCurrentTimerValue);
        clearInterval(this.globalInterval);
      }
     else if(d.isStart === true && d.isPause === false) {
        this.commonService.passTimeValue.subscribe((v) => {
          if(!this.commonService.isReset){
            console.log('started');
            this.showCurrentTimerValue = v;
            this.startCount = this.startCount + 1;
            this.startTimeStamp=new Date();
            this.commonService.startCounter.next(this.startCount);
            this.commonService.startedAtTimeStamp.next(this.startTimeStamp);
            this.globalInterval = setInterval(() => {
              if (this.showCurrentTimerValue > 0) {
                this.showCurrentTimerValue = this.showCurrentTimerValue - 1;
              }
              else {
               
                return
              }
            }, 1000);
          }
        else{
          this.showCurrentTimerValue=0;
        }
      
        })

      }

    
      else if(d.isStart ==false && d.isPause == false){
             return
      }
    })
  }
}




