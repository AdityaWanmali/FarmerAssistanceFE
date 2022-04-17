import { TestBed } from '@angular/core/testing';

import { Grivence.ServiceService } from './grivence.service.service';

describe('Grivence.ServiceService', () => {
  let service: Grivence.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Grivence.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
