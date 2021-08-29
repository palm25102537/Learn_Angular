import { Injectable } from '@angular/core';
//another declarator
@Injectable({
  providedIn: 'root'
})

//tell Angular to inject this class
export class EmailService {

  constructor() { }
}
