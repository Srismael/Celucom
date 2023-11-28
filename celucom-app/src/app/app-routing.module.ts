import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './view/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';

const routes:Routes = [

  {path:'view/home/',
  component:HomeComponent
  },
  {path:'view/login/',
  component:LoginComponent
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
