import { TestBed } from '@angular/core/testing';

import { HarcodedAuthServiceService } from './harcoded-auth-service.service';

describe('HarcodedAuthServiceService', () => {
  let service: HarcodedAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarcodedAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
