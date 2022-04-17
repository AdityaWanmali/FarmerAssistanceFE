import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGrevancesComponent } from './update-grevances.component';

describe('UpdateGrevancesComponent', () => {
  let component: UpdateGrevancesComponent;
  let fixture: ComponentFixture<UpdateGrevancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGrevancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGrevancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
