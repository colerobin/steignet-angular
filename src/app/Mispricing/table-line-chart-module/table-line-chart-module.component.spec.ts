import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLineChartModuleComponent } from './table-line-chart-module.component';

describe('TableLineChartModuleComponent', () => {
  let component: TableLineChartModuleComponent;
  let fixture: ComponentFixture<TableLineChartModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLineChartModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLineChartModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
