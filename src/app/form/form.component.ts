import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  contactMethods = [
    {id:0,name:'None'},
    {id:1,name:'Email'},
    {id:2,name:'Iphone'}
  ]
  

  constructor() { }

  log(x:any){
    console.log(x)
  }
 
  submit(form:any){
    console.log(form)
  }
}
