import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructralDirectivesComponent } from './structral-directives/structral-directives.component';

const routes: Routes = [
  {path:"", component:StructralDirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
