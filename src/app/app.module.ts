import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { UserComponent } from './views/template-driven-forms/user.component';

@NgModule({
    imports: [ 
    AppRoutingModule, 
    BrowserModule,FormsModule, HttpClientModule, CommonModule
  ],

  declarations: [
    AppComponent
  ],


  bootstrap: [ AppComponent]
})
export class AppModule { }
