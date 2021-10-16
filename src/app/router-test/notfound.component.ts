import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: 
  `
    <h1>Not found Page</h1>
  `,
  styleUrls: ['./router-test.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
