import { TestBed } from '@angular/core/testing';

import { NgrGridService } from './ngr-grid.service';

describe('NgrGridService', () => {
  let service: NgrGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
