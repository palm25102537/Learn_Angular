import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe'
import { AppComponent } from './app.component';
import { CoursesComponent } from './course-form.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { IconPipe } from './icon.pipe';
import { SpreadWordPipe } from './spreadWord.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { AboutNgComponent } from './about-ng/about-ng.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

//NgModule decorator
// turn class into module
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    IconPipe,
    SpreadWordPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    AboutNgComponent,
    InputFormatDirective,
    ZippyComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [
    CourseService //Call Singleton pattern that giving object in memory //this method call dependency injection
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
