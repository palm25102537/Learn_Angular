import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-test',
  templateUrl: './router-test.component.html',
  styleUrls: ['./router-test.component.css']
})
export class RouterTestComponent implements OnInit {

  content = [
    {year:2017,month:1},
    {year:2017,month:2},
    {year:2017,month:3}
  ]

  constructor() { }

  ngOnInit(): void {
   
  }

}
