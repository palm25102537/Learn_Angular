import { Component, OnInit} from '@angular/core';
import { AppError } from '../service/error/app-error';
import { BadInput } from '../service/error/bad-input';
import { NotFoundError } from '../service/error/not-found-error';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  posts:any
  constructor(
   private service: PostService
    ) { 
  
    //notify when data is ready
  }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (res)=>{
        console.log(res)
        this.posts = res
      },error =>{
         alert('An unexpected error occurred')
         console.log(error)
      }
    )
  }

  create(input:HTMLInputElement){
    let sendData = {title:input.value}
   this.posts.splice(0,0,{title:input.value})
    input.value = ""
    this.service.create(sendData).subscribe()
  }

  update(post:any){
  
    // this.http.patch(this.url+`/${post.id}`,{isRed:true}).subscribe((res)=>{
    //   console.log(res)
    // })
    this.service.update(post.id).subscribe((res)=>{
      console.log(res)
    })
   
  }

  delete(post:any){
    this.service.delete(post.id).subscribe(
      res =>{
        let idx = this.posts.indexOf(post)
        this.posts.splice(idx,1)
      },(error:AppError) =>{
        if(error instanceof NotFoundError){
          alert('This post has already been delete')
        }else{
          throw error
        }
        
     }
    )
  }

}
