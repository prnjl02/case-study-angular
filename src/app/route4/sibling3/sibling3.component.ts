import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-sibling3',
  templateUrl: './sibling3.component.html',
  styleUrls: ['./sibling3.component.css']
})
export class Sibling3Component implements OnInit {
startedAt:any;
pausedAt:any;


  constructor(private commonService:CommonServiceService) { }

  ngOnInit(): void {
    this.commonService.startedAtTimeStamp.subscribe(d=>this.startedAt=d);
    this.commonService.pausedAtTimeStamp.subscribe(d=>this.pausedAt=d)
  }

}
