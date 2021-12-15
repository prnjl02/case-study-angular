import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route3RoutingModule } from './route3-routing.module';
import { Route3Component } from './route3.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { Sibling3Component } from './sibling3/sibling3.component';
import { Sibling4Component } from './sibling4/sibling4.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Route3Component,
    Sibling1Component,
    Sibling2Component,
    Sibling3Component,
    Sibling4Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    Route3RoutingModule
  ]
})
export class Route3Module { }
