import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {

  constructor() { }

  categories = [
    {id:1,name:'Development'},
    {id:2,name:'Art'},
    {id:3,name:'Languages'}
  ]

  ngOnInit(): void {
  }

}
