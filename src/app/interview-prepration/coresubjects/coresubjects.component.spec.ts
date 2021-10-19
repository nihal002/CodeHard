import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoresubjectsComponent } from './coresubjects.component';

describe('CoresubjectsComponent', () => {
  let component: CoresubjectsComponent;
  let fixture: ComponentFixture<CoresubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoresubjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoresubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
