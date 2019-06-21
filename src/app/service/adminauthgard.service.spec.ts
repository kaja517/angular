import { TestBed } from '@angular/core/testing';

import { AdminauthgardService } from './adminauthgard.service';

describe('AdminauthgardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminauthgardService = TestBed.get(AdminauthgardService);
    expect(service).toBeTruthy();
  });
});
