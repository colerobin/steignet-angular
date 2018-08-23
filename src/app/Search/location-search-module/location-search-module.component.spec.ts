import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSearchModuleComponent } from './location-search-module.component';

describe('LocationSearchModuleComponent', () => {
  let component: LocationSearchModuleComponent;
  let fixture: ComponentFixture<LocationSearchModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSearchModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSearchModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
