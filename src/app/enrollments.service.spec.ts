import { TestBed } from '@angular/core/testing';

import { EnrollmentsService } from './enrollments.service';

describe('EnrollmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrollmentsService = TestBed.get(EnrollmentsService);
    expect(service).toBeTruthy();
  });
});
