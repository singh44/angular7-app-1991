import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.css' ]
})
export class UserComponent  {
powers = ['Really Smart', 'Super Flexible',  
            'Super Hot', 'Weather Changer'];  
  model = new User(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');  
  submitted = false;  
  onSubmit() {
    alert(JSON.stringify(this.model)); 
    this.submitted = true;
     }  
  // TODO: Remove this when we're done  
  get diagnostic() { return JSON.stringify(this.model); }  
}
