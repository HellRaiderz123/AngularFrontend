import { TestBed } from '@angular/core/testing';

import { SpringBootDataServiceService } from './spring-boot-data-service.service';

describe('SpringBootDataServiceService', () => {
  let service: SpringBootDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringBootDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
