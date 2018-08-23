import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MispricingPageComponent } from './mispricing-page.component';

describe('MispricingPageComponent', () => {
  let component: MispricingPageComponent;
  let fixture: ComponentFixture<MispricingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MispricingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MispricingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
