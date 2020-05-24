import { TestBed } from '@angular/core/testing';

import { CouncilService } from './council.service';

describe('CouncilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CouncilService = TestBed.get(CouncilService);
    expect(service).toBeTruthy();
  });
});
