import { TestBed } from '@angular/core/testing';

import { ElectonicService } from './electonic.service';

describe('ElectonicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectonicService = TestBed.get(ElectonicService);
    expect(service).toBeTruthy();
  });
});
