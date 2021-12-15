import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment';
  routes=['Route1','Route2','Route3','Route4','Route5','Route6']

  constructor(private route : Router){

  }
  onClickRoute(route:string){
    this.route.navigate([route])
  }
}
