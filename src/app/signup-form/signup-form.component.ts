import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    // username: new FormControl("",
    // [
    //   Validators.required,
    //   UsernameValidators.cannotContainSpace
    // ],
    //   UsernameValidators.shouldBeUnique)
    //   ,
    // password: new FormControl("",[
    //   Validators.required,
    //   Validators.minLength(6),
     
    // ]),
    //Nested Form
    account:new FormGroup({
      username: new FormControl("",
      [
        Validators.required,
        UsernameValidators.cannotContainSpace
      ],
        UsernameValidators.shouldBeUnique)
        ,
      password: new FormControl("",[
        Validators.required,
        Validators.minLength(6),
       
      ]),
    })
  })

  constructor() { }

  ngOnInit(): void {
    console.log(this.form.get('account.username'))
  }

  get username(){
    return this.form.get('account.username')
  }

  get pwd(){
    return this.form.get('account.password')
  }

  login(){
    this.form.setErrors({
      invalidLogin:true
    });
  }

}
