import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'Route1', loadChildren: () => import('./route1/route1.module').then(m => m.Route1Module) },
  { path: 'Route2', loadChildren: () => import('./route2/route2.module').then(m => m.Route2Module) },
  { path: 'Route3', loadChildren: () => import('./route3/route3.module').then(m => m.Route3Module) },
  { path: 'Route5', loadChildren: () => import('./route5/route5.module').then(m => m.Route5Module) },
  { path: 'Route6', loadChildren: () => import('./roue6/roue6.module').then(m => m.Roue6Module) },
  { path: 'Route4', loadChildren: () => import('./route4/route4.module').then(m => m.Route4Module) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
