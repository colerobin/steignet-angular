import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MispricingTableModule1Component } from './mispricing-table-module1.component';

describe('MispricingTableModule1Component', () => {
  let component: MispricingTableModule1Component;
  let fixture: ComponentFixture<MispricingTableModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MispricingTableModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MispricingTableModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
