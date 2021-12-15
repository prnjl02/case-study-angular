import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit, OnChanges {
  @Output() timeLimitToParent: EventEmitter<any> = new EventEmitter();
  timeLimit: number = 0;
  isStart: boolean = false;
  isPause: boolean = false;
  @Output() isStarted: EventEmitter<boolean> = new EventEmitter();
  @Output() isPaused: EventEmitter<boolean> = new EventEmitter();
  @Input() updatedCounterValueFromParent: number = 0;
  @Input() showPausedAt: number = 0;
  @Output() isPausedCount: EventEmitter<number> = new EventEmitter();
  @Output() isStartedCount: EventEmitter<number> = new EventEmitter();
  @Output() isStartedTimeStamp: EventEmitter<Date> = new EventEmitter();
  @Output() isPausedTimeStamp: EventEmitter<Date> = new EventEmitter();
  isStartTimeStamp: any;
  isPauseTimeStamp: any;
  isPauseCount: number = 0;
  isStartCOunt: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.timeLimit = this.updatedCounterValueFromParent;
  }
  start() {
    this.isStart = !this.isStart;
    if (!this.isStart) {
      this.pause();
    }
    else {
      this.isStart = true;
      this.isPause = false;
      if (this.timeLimit > 0) {
        this.isStartCOunt = this.isStartCOunt + 1;
        this.isStartTimeStamp = new Date();
        this.timeLimitToParent.emit(this.timeLimit);
        this.isStarted.emit(this.isStart);
        this.isStartedCount.emit(this.isStartCOunt);
        this.isStartedTimeStamp.emit(this.isStartTimeStamp)
      }
    }
  }
  reset() {
    this.pause();
  }
  pause() {
    this.isPause = true;
    this.isStart = false;
    if (this.timeLimit > 0) {
      this.isPauseCount = this.isPauseCount + 1;
      this.isPauseTimeStamp = new Date();
      this.isPaused.emit(this.isPause);
      this.isPausedCount.emit(this.isPauseCount);
      this.isPausedTimeStamp.emit(this.isPauseTimeStamp);
    }
  }
}

