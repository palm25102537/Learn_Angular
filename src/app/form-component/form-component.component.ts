import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  // form = new FormGroup({
  //   name: new FormControl(),
  //   contact: new FormGroup({
  //     email: new FormControl(), 
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // })

  form:any;

  constructor(fb:FormBuilder) { 
    this.form = fb.group({
      name:['',Validators.required],
      contact: fb.group({
        email:[],
        phone:[]
      }),
      topics: fb.array([])
    })
     
   }

 
    get formCtrl(){
      return (this.form.get('topics') as FormArray)
    }

    addTopic(topic: HTMLInputElement){
      this.formCtrl.push(new FormControl(topic.value))
      topic.value = ""   
    }

    removeTopic(topic:any){
      let idx = this.formCtrl.controls.indexOf(topic)
      this.formCtrl.removeAt(idx)
    }
}
