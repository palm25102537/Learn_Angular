import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './course-form.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
//NgModule decorator
// turn class into module
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseService //Call Singleton pattern that giving object in memory //this method call dependency injection
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
