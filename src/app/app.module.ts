import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { FormComponent } from './form/form.component';
import { FormTestComponent } from './form-test/form-test.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostComponent } from './post/post.component';
import {HttpClientModule} from '@angular/common/http'
import { PostService } from './service/post.service';
import { AppErrorHandle } from './service/error/app-error-handle';
import { GithubTestComponent } from './github-test/github-test.component';
import { RouterModule } from '@angular/router';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterTestComponent } from './router-test/router-test.component';
import { NotFoundComponent } from './router-test/notfound.component';
import { RouterDetailComponent } from './router-test/router-test-detail.component';
import { AuthenLessonComponent } from './authen-lesson/authen-lesson.component';
import { AuthenAdminComponent } from './authen-lesson/authen-admin.component';
import { NoAccessComponent } from './authen-lesson/authen-noAccess.component';
import { LoginComponent } from './authen-lesson/authen-login.component';
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
    FormComponent,
    FormTestComponent,
    SignupFormComponent,
    FormComponentComponent,
    ChangePasswordFormComponent,
    PostComponent,
    GithubTestComponent,
    GithubProfileComponent,
    NavbarComponent,
    RouterTestComponent,
    NotFoundComponent,
    RouterDetailComponent,
    AuthenLessonComponent,
    AuthenAdminComponent,
    NoAccessComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:AuthenLessonComponent
      },
      {
        path:'admin',
        component:AuthenAdminComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'**',
        component:NavbarComponent
      }
    ])
  ],
  providers: [
    CourseService, //Call Singleton pattern that giving object in memory //this method call dependency injection
    PostService,
    {provide:ErrorHandler,useClass:AppErrorHandle}, //tell angular to replace implementation 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
