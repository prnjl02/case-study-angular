import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling3',
  templateUrl: './sibling3.component.html',
  styleUrls: ['./sibling3.component.css']
})
export class Sibling3Component implements OnInit {
@Input()isPausedTimeStampFromParent:any;
@Input()isStartedTimeStampFromParent:any;

  constructor() { }

  ngOnInit(): void {
  }

}
