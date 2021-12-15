import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-sibling4',
  templateUrl: './sibling4.component.html',
  styleUrls: ['./sibling4.component.css']
})
export class Sibling4Component implements OnInit {
startCount:number=0;
pauseCount:number=0;
  constructor(private commonService:CommonServiceService) { }

  ngOnInit(): void {
    this.commonService.startCounter.subscribe(d=>this.startCount=d);
    this.commonService.pausedCounter.subscribe(d=>this.pauseCount=d)
  }

}
