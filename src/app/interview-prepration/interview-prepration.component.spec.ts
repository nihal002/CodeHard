import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPreprationComponent } from './interview-prepration.component';

describe('InterviewPreprationComponent', () => {
  let component: InterviewPreprationComponent;
  let fixture: ComponentFixture<InterviewPreprationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewPreprationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewPreprationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
