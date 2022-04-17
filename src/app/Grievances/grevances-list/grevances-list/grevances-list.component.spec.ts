import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrevancesListComponent } from './grevances-list.component';

describe('GrevancesListComponent', () => {
  let component: GrevancesListComponent;
  let fixture: ComponentFixture<GrevancesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrevancesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrevancesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
