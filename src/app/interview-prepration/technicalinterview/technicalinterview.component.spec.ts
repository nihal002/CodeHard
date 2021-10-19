import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalinterviewComponent } from './technicalinterview.component';

describe('TechnicalinterviewComponent', () => {
  let component: TechnicalinterviewComponent;
  let fixture: ComponentFixture<TechnicalinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalinterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
