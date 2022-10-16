import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule ,Routes } from '@angular/router';
import { FormComponent } from './form/form.component';


const appRoutes: Routes=[
  {
    path:"",component:HomeComponent
  },
  {
    path:"forms",component:FormComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
