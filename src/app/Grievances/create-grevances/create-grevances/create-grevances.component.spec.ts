import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGrevancesComponent } from './create-grevances.component';

describe('CreateGrevancesComponent', () => {
  let component: CreateGrevancesComponent;
  let fixture: ComponentFixture<CreateGrevancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGrevancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGrevancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
