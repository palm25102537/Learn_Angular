import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-ng',
  templateUrl: './about-ng.component.html',
  styleUrls: ['./about-ng.component.css']
})
export class AboutNgComponent implements OnInit {

  constructor() { }

  courses:any;
  viewMode = "somethingElse";

  ngOnInit(): void {
  }
  onAdd(){
    this.courses.push({id:4,name:'course4'})
  }
  onRemove(course:any){
  
    let idx = this.courses.indexOf(course)
   
    this.courses.splice(idx,1)
  }

  onChange(course:any){
  course.name='UPDATED'
  }

  loadCourses(){
    this.courses = [
      {id:1,name:'course1'},
      {id:2,name:'course2'},
      {id:3,name:'course3'}
    ]
  }
  //make angular track this by id if id didn't change it will not re-render
  trackCourse(index:any,course:any){
    return course ? course.id:undefined
  }

}
