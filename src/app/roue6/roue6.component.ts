import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-roue6',
  templateUrl: './roue6.component.html',
  styleUrls: ['./roue6.component.css']
})
export class Roue6Component implements OnInit {
  currentPosition = window.pageYOffset;
  containers:any=[];
  constructor() { }

@HostListener("scroll", ['$event.target'])
onContentScrolled(e: HTMLElement) {
  let scroll = e.scrollTop;
  if (scroll > this.currentPosition) {
    this.containers.push(this.containers.length);
  } else {
  }
  this.currentPosition = scroll;
}

  ngOnInit(): void {
    this.containers.length=20;
  }
  showMyNumber(num:number){
alert('Button '+ (num+1)+' is clicked');
  }
  
}
