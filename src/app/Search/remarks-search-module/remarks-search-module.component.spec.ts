import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksSearchModuleComponent } from './remarks-search-module.component';

describe('RemarksSearchModuleComponent', () => {
  let component: RemarksSearchModuleComponent;
  let fixture: ComponentFixture<RemarksSearchModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemarksSearchModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemarksSearchModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
