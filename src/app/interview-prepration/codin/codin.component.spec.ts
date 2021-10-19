import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodinComponent } from './codin.component';

describe('CodinComponent', () => {
  let component: CodinComponent;
  let fixture: ComponentFixture<CodinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
