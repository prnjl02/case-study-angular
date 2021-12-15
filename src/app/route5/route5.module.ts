import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route5RoutingModule } from './route5-routing.module';
import { Route5Component } from './route5.component';
import { KeysPipe } from './keys.pipe';


@NgModule({
  declarations: [
    Route5Component,
    KeysPipe
  ],
  imports: [
    CommonModule,
    Route5RoutingModule
  ]
})
export class Route5Module { }
