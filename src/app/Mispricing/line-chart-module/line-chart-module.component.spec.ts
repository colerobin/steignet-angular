import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartModuleComponent } from './line-chart-module.component';

describe('LineChartModuleComponent', () => {
  let component: LineChartModuleComponent;
  let fixture: ComponentFixture<LineChartModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineChartModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
