import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNgComponent } from './about-ng.component';

describe('AboutNgComponent', () => {
  let component: AboutNgComponent;
  let fixture: ComponentFixture<AboutNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
