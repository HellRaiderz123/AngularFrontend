import { TestBed } from '@angular/core/testing';

import { TodoHttpInterceptorService } from './todo-http-interceptor.service';

describe('TodoHttpInterceptorService', () => {
  let service: TodoHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
