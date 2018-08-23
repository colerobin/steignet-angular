import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSearchModuleComponent } from './status-search-module.component';

describe('StatusSearchModuleComponent', () => {
  let component: StatusSearchModuleComponent;
  let fixture: ComponentFixture<StatusSearchModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusSearchModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSearchModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
