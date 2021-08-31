import {Component} from '@angular/core'
import { CourseService } from './course.service'
//Decorator Component
//Tell angular this file is Component
@Component({
// add property to tell how this component work
selector:"course", // to define html element and angular will render this element
// ng g c component's name (create component)
// ng g s service's name (create service)
template:
`
<h2>{{'Title : '+getTitle()}}</h2>
<h2 [textContent]="propertyBinding"></h2>
<ul> 
<li *ngFor="let course of courses">{{course}}</li>
</ul>
Interpretation
<br/>
<img src={{imageURL}}>
<br/>
Angular translate above into Property Binding
<br/>
<img [src]="imageURL"/>
`
})

export class CoursesComponent{
    propertyBinding ="Hello World"
    imageURL = "https://picsum.photos/200/300"
    courses:string[];
    title:any;
    authorAmount:number;
    constructor(service:CourseService){
        //service in constructor is instance that angular created if initialize in constructor
        // let service = new CourseService()
        this.courses = service.getAuthor()
        this.authorAmount = this.courses.length
        this.title=this.authorAmount > 1 ? `${this.authorAmount} Authors`:`${this.authorAmount} Author`; 
    }
    getTitle(){
        return "Author"
    }
  
    
    
    
    //
}