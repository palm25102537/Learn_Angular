import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  id!:number
  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) {
 
   
   }

  ngOnInit(): void {
    let idNum = this.route.snapshot.paramMap.get('id')
    console.log(idNum)
  }

  submit(){
    this.router.navigate(['/followers'],{
      queryParams:{page:1,order:'newest'}
    })
  }

}
