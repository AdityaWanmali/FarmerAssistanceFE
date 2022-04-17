import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierNavComponent } from './supplier-nav.component';

describe('SupplierNavComponent', () => {
  let component: SupplierNavComponent;
  let fixture: ComponentFixture<SupplierNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
