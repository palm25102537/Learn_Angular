import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubTestComponent } from './github-test.component';

describe('GithubTestComponent', () => {
  let component: GithubTestComponent;
  let fixture: ComponentFixture<GithubTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
