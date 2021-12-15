import { Component, Input, OnChanges, OnInit, Output,EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit, OnChanges {
  @Input() timeLimitFromParent: number = 0;
  showCounterValue = 0;
  globalInterval:any;
  currentCounterValue:number=0;
  @Input() isStarted:boolean=false;
  @Input() isPaused:boolean=false;
  @Output() updatedCounterValue : EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.timeLimitFromParent>0){
      this.showCounterValue = this.timeLimitFromParent
      if(!this.isPaused && this.isStarted){
        this.globalInterval= setInterval(()=>{
          if(this.showCounterValue>0){
            this.showCounterValue=this.showCounterValue-1;
          this.currentCounterValue=this.showCounterValue;
          this.showCounterValue=this.currentCounterValue
          }
          else{
            return
          }
          },1000);
      }
      else {
        clearInterval(this.globalInterval);
        this.updatedCounterValue.emit(this.currentCounterValue);
      }
    }
  }

  }
 
