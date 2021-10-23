import { TestBed } from '@angular/core/testing';

import { DataDirectoryService } from './data-directory.service';

describe('DataDirectoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDirectoryService = TestBed.get(DataDirectoryService);
    expect(service).toBeTruthy();
  });
});
