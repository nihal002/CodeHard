import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrinterviewComponent } from './hrinterview.component';

describe('HrinterviewComponent', () => {
  let component: HrinterviewComponent;
  let fixture: ComponentFixture<HrinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrinterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
