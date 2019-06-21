import { TestBed } from '@angular/core/testing';

import { UsergardService } from './usergard.service';

describe('UsergardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsergardService = TestBed.get(UsergardService);
    expect(service).toBeTruthy();
  });
});
