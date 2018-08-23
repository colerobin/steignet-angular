import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageMLSOverviewModuleComponent } from './error-page-mlsoverview-module.component';

describe('ErrorPageMLSOverviewModuleComponent', () => {
  let component: ErrorPageMLSOverviewModuleComponent;
  let fixture: ComponentFixture<ErrorPageMLSOverviewModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPageMLSOverviewModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageMLSOverviewModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
