import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
public passTimeValue = new Subject<any>();
public startCounter=new BehaviorSubject<number>(0);
public pausedCounter= new BehaviorSubject<number>(0);
public currentPausedValue =new Subject<number>();
public startedAtTimeStamp=new Subject<Date>();
public pausedAtTimeStamp = new Subject <Date>();
public showPausedAt= new Subject<number>();
public isStartOrPause = new Subject<any>();
public isReset:boolean=false;
  constructor() { }

  transferTimeLimitValue(value:any){
  this.passTimeValue.next(value);
  }
}
