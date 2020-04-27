import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnohterCourseFormComponent } from './anohter-course-form.component';

describe('AnohterCourseFormComponent', () => {
  let component: AnohterCourseFormComponent;
  let fixture: ComponentFixture<AnohterCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnohterCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnohterCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
