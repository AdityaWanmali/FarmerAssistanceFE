import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrevanceDetailsComponent } from './grevance-details.component';

describe('GrevanceDetailsComponent', () => {
  let component: GrevanceDetailsComponent;
  let fixture: ComponentFixture<GrevanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrevanceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrevanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
