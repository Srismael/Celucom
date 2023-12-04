import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { SignupComponent } from './view/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './view/home/home.component';
import { ProfileComponent } from './view/profile/profile.component';
import { ProductComponent } from './view/product/product.component';
import { ContactsComponent } from './view/contacts/contacts.component';

const appRoute:Routes=[

  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'signup',component:SignupComponent},
  {path:'Product',component:ProductComponent},
  {path: 'Contacts',component:ContactsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    ProductComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
