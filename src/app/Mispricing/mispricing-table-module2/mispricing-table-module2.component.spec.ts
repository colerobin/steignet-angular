import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MispricingTableModule2Component } from './mispricing-table-module2.component';

describe('MispricingTableModule2Component', () => {
  let component: MispricingTableModule2Component;
  let fixture: ComponentFixture<MispricingTableModule2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MispricingTableModule2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MispricingTableModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
