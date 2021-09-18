import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ChangePasswordValidator } from './change-password.validators';
@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent implements OnInit {
  form:any;
  constructor(
    fb:FormBuilder
  ) { 
    this.form = fb.group({
      oldPassword:['',
      Validators.required,
      ChangePasswordValidator.checkOldPassword
    ],
      newPassword:['',Validators.required],
      confirmPassword:['',Validators.required],

    },{
      validators:ChangePasswordValidator.passwordShouldMatch
    })
  }

  ngOnInit(): void {

  }

  get oldPassword(){
    return this.form.get('oldPassword')
  }

  get newPassword(){
    return this.form.get('newPassword')
  }

  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

  log(){
    console.log(this.form.value)
  }

  checkMatch(){
    const newPassword = this.newPassword.value
    const confirmPassword = this.confirmPassword.value

    if(newPassword !== confirmPassword && confirmPassword.length > 0){
      this.form.setErrors({
        isNotMatch:true
      })
    }

  }
}
