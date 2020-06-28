import { TestBed } from '@angular/core/testing';

import { InitialSliderService } from './initial-slider.service';

describe('InitialSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitialSliderService = TestBed.get(InitialSliderService);
    expect(service).toBeTruthy();
  });
});
