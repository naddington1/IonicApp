import { TestBed } from '@angular/core/testing';

import { tvService } from './tv.service';

describe('TvService', () => {
  let service: tvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
