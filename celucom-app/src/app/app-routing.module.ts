import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './view/login/login.component';
import { Routes } from '@angular/router';

const appRoute:Routes=[
  
  {path:'login' , component:LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
