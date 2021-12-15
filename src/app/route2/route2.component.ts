import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
isGridView:boolean=true;
isListView:boolean=false;

data = [{
  productName: '1',
  price: 10
}, {
  productName: '2',
  price: 20
}, {
  productName: '3',
  price:30
 
}, {
  productName: '4',
  price:40
 
}, {
  productName: '5',
  price:50
 
}, {
  productName: '6',
  price:60
 
},{
  productName: '7',
  price:70
 
},{
  productName: '8',
  price:80
 
},{
  productName: '9',
  price:90
 
},{
  productName: '10',
  price:100
 
},{
  productName: '11',
  price:110
 
},{
  productName: '12',
  price:120
 
},{
  productName: '13',
  price:130
},{
  productName: '14',
  price:140
},{
  productName: '15',
  price:150
},{
  productName: '16',
  price:160
},];
  constructor() { }

  ngOnInit(): void {
  }
  showGridView(){
    this.isGridView=true;
    this.isListView=false;
  }
  showListView(){
    this.isListView=true;
    this.isGridView=false;
  }
  filterProducts(e:any){
    if(e.target.value==='ascending'){
     this.data.sort((a, b) => (a.price) - (b.price));
  }
    else{
      this.data.sort((a, b) => (b.price) - (a.price));
    }
  }
}
