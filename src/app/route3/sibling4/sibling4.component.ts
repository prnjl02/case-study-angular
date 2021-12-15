import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling4',
  templateUrl: './sibling4.component.html',
  styleUrls: ['./sibling4.component.css']
})
export class Sibling4Component implements OnInit,OnChanges {

  @Input()isPausedCounter=0;
  @Input()isStartCounter=0;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
this.isPausedCounter
  }
}
