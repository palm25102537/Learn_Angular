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
<div>
{{content | spreadWord:"of":"the"}}
<br/>
<input [(ngModel)] = content  />
</div>
<div>
<a (click)="onClickA()">{{""|icon:clickCheck}}</a>
</div>
<h2>{{'Title : '+getTitle()}}</h2>
<h2 [textContent]="propertyBinding"></h2>
<ul> 
<li *ngFor="let course of courses">{{course}}</li>
</ul>
<br/>
<h1>Template Variable</h1>
<input #email (keyup.enter) = "onKeyUp(email.value)"/>
<input #boolean type="checkbox" value="B-4865"  (key.enter)="onChange($event,boolean.value)"/>
<br/>
<h1>Two-way Binding</h1>
<input [(ngModel)] = "emailTwoWay"  (keyup.enter)="onKeyUp2()"/>
<br/>
<br/>
{{course.title | uppercase}}
{{course.title | lowercase }}
<br/>
{{course.rating | number:"1.1-1"}}
<br/>
{{course.students | number}}
<br/>
{{course.price | currency:'THB':true:'3.2-2'}}
<br/>
{{course.releaseDate | date:"shortDate"}}
<br/>
<h1>CUSTOM PIPE</h1>
{{text | summary}}
<br/>
{{text | summary:5}}
<br/>
<br/>
Interpretation
<br/>
<img src={{imageURL}}>
<br/>
Angular translate above into Property Binding
<br/>
<img [src]="imageURL"/>
`
,
styleUrls:['./app.component.css']})

export class CoursesComponent{
    propertyBinding ="Hello World"
    imageURL = "https://picsum.photos/200/300"
    courses:string[];
    title:any;
    authorAmount:number;
    emailTwoWay ="This is two way binding"
    text="tasdasdwlkdqjsklnxmc,nqskldjqaksldjqwpdqwipoe1i2-e12-03921421kascnzxa"
    content:any;
    contentToShow = ""
    clickCheck = false
    constructor(service:CourseService){
        //service in constructor is instance that angular created if initialize in constructor
        // let service = new CourseService()
        this.courses = service.getAuthor()
        this.authorAmount = this.courses.length
        this.title=this.authorAmount > 1 ? `${this.authorAmount} Authors`:`${this.authorAmount} Author`;
        this.contentToShow = this.content 
    }
    course = {
        title: "Pipes",
        rating:4.9745,
        students:30123,
        price:190.95,
        releaseDate: new Date("2021-09-04")
    }
    getTitle(){
        return "Author"
    }
    //template value
  
    onKeyUp(email:string){
        console.log(email)
    }

    //Two way binding Old method
    /*<input
 [value]="emailTwoWay" 
 (keyup.enter)="emailTwoWay = $event.target.value;onKeyUp2()"
 />
*/

    onKeyUp2(){
        console.log(this.emailTwoWay)
    }
    onChange(event:any,value:string){
        const {checked} = event.target

        if(checked){
            console.log(value)
        }else{
            console.log("unchecked")
        }
    }

    onClickA(){
        !this.clickCheck ? this.clickCheck=true : this.clickCheck = false
    }
    
 
}