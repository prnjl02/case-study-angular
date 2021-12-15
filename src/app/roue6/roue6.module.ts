import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Roue6RoutingModule } from './roue6-routing.module';
import { Roue6Component } from './roue6.component';


@NgModule({
  declarations: [
    Roue6Component
  ],
  imports: [
    CommonModule,
    Roue6RoutingModule
  ]
})
export class Roue6Module { }
