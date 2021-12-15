import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css']
})
export class Route5Component implements OnInit {
  ascending = 'ascend';
  newArray: any = [];
  initialData: any = [];
  constructor() { }

  actualData: any = [{ Name: "ABC", Class: 3, Section: 'D', Sub1: 23, Sub2: 34, Sub3: 54 },
  { Name: "GHI", Class: 7, Section: 'B', Sub1: 27, Sub2: 38, Sub3: 58 },
  { Name: "DEF", Class: 3, Section: 'E', Sub1: 24, Sub2: 35, Sub3: 55 },
  { Name: "JKL", Class: 6, Section: 'F', Sub1: 25, Sub2: 36, Sub3: 56 },
  { Name: "MNO", Class: 4, Section: 'A', Sub1: 26, Sub2: 37, Sub3: 57 }
  ]

  items: string[] = [];
  ngOnInit(): void {
    this.items = JSON.parse(JSON.stringify(this.actualData));
  }
  sortData(col:string) {

  
  if(col==="Section" || col==="Name"){
    if(this.ascending === 'ascend'){
      this.items=this.items.sort((a:any, b:any) => (a[col] < b[col] ? -1 : 1));
      //this.items=this.newArray;
      this.ascending = 'descend'
    }
    else if(this.ascending === 'descend'){
      this.items=this.items.sort((a:any, b:any) => (a[col] > b[col] ? -1 : 1));
      //this.items=this.newArray;
      this.ascending = 'initial'
    }
    else{
      this.items = JSON.parse(JSON.stringify(this.actualData));
      //this.items = this.newArray
      this.ascending = 'ascend'
    }
   
  }
  else{
    if (this.ascending === 'ascend') {
      this.items = this.items.sort((a: any, b: any) => a[col] - b[col]);
     // this.items = this.newArray
      this.ascending = 'descend'
    }
    else if (this.ascending === 'descend') {
      this.items = this.items.sort((a: any, b: any) => b[col] - a[col]);
      //this.items = this.newArray
      this.ascending = 'initial'
    }
    else if (this.ascending === 'initial') {
      this.items = JSON.parse(JSON.stringify(this.actualData));
     // this.items = this.newArray
      this.ascending = 'ascend'
    }
    else {
      return
    }
  }
  }
}
