import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseSearchComponent } from './collapse-search.component';

describe('CollapseSearchComponent', () => {
  let component: CollapseSearchComponent;
  let fixture: ComponentFixture<CollapseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
