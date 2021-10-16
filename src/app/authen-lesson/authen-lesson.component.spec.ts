import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenLessonComponent } from './authen-lesson.component';

describe('AuthenLessonComponent', () => {
  let component: AuthenLessonComponent;
  let fixture: ComponentFixture<AuthenLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
