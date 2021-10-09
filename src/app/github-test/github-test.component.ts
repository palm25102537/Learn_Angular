import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FollowersService } from '../service/followers.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-github-test',
  templateUrl: './github-test.component.html',
  styleUrls: ['./github-test.component.css']
})
export class GithubTestComponent implements OnInit {
  details:any;

  constructor(
    private http:HttpClient,
    private service:FollowersService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params=>{
         console.log(params)
      })
    )

    this.route.queryParamMap.subscribe(
        query =>{
          
        }
    )

    this.service.getAll().subscribe(
      (res)=>{
        console.log(res)
        this.details = res
      },error =>{
         alert('An unexpected error occurred')
         console.log(error)
      }
    )
    console.log(this.details)
  }



}
