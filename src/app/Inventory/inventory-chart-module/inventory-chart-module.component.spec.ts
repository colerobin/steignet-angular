import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryChartModuleComponent } from './inventory-chart-module.component';

describe('InventoryChartModuleComponent', () => {
  let component: InventoryChartModuleComponent;
  let fixture: ComponentFixture<InventoryChartModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryChartModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryChartModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
