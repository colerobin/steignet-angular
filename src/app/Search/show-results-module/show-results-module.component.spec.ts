import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowResultsModuleComponent } from './show-results-module.component';

describe('ShowResultsModuleComponent', () => {
  let component: ShowResultsModuleComponent;
  let fixture: ComponentFixture<ShowResultsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowResultsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowResultsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
