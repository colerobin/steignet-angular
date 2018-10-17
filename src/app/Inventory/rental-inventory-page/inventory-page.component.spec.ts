import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalInventoryPageComponent } from './inventory-page.component';

describe('InventoryPageComponent', () => {
  let component: RentalInventoryPageComponent;
  let fixture: ComponentFixture<RentalInventoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalInventoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalInventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
