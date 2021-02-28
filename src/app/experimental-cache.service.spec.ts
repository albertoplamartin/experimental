import { TestBed } from '@angular/core/testing';

import { ExperimentalCacheService } from './experimental-cache.service';

describe('ExperimentalCacheService', () => {
  let service: ExperimentalCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperimentalCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
