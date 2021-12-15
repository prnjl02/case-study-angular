import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Roue6Component } from './roue6.component';

const routes: Routes = [{ path: '', component: Roue6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Roue6RoutingModule { }
