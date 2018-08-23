import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySearchModuleComponent } from './property-search-module.component';

describe('PropertySearchModuleComponent', () => {
  let component: PropertySearchModuleComponent;
  let fixture: ComponentFixture<PropertySearchModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySearchModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
