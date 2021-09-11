import { Component, OnInit,Input,ElementRef,HostListener } from '@angular/core';


@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {
  content:any;
  isOpen = false
  // title:any  
  
  @Input('title') title = "";
  constructor(
    // private el:ElementRef 
  ) { 
    // this.title = el.nativeElement.title
    // this.content = el.nativeElement.textContent
  }
  


  toggle(){
    this.isOpen = !this.isOpen
  }

}