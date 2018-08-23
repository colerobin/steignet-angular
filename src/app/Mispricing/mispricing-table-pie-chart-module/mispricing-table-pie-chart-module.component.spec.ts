import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MispricingTablePieChartModuleComponent } from './mispricing-table-pie-chart-module.component';

describe('MispricingTablePieChartModuleComponent', () => {
  let component: MispricingTablePieChartModuleComponent;
  let fixture: ComponentFixture<MispricingTablePieChartModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MispricingTablePieChartModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MispricingTablePieChartModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
