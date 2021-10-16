import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { merge } from 'rxjs';
import { map,takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-router-detail',
  template: 
  `
    <h1>Archive {{text}}</h1>
    <button (click)="goBack()">View All</button>
  `,
  styleUrls: ['./router-test.component.css']
})
export class RouterDetailComponent implements OnInit {
    text = ""
    year!:string
    month!:string
  constructor(
      private route:ActivatedRoute,
      private router:Router
  ) {
    this.route.params.subscribe(
        params =>{
            this.year = params.year
            this.month = params.month
        }
    )
    this.text = `${this.year}/${this.month}`
   }
    
  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate([''])
  }


}
