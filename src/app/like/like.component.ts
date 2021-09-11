import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() body = ""

  @Input() isLiked = false

  @Input() likesCount = 0

  isActive = "inActive"

  constructor() { }

  ngOnInit(): void {
  }

  onLike(){
    if(!this.isLiked){
      this.isLiked = true
      this.likesCount = +this.likesCount + 1
    }else{
      this.isLiked = false
      this.likesCount = +this.likesCount - 1  
    }
   
  }
}
