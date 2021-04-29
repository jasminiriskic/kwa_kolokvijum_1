import { TestBed } from '@angular/core/testing';

import { KupovineService } from './kupovine.service';

describe('KupovineService', () => {
  let service: KupovineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KupovineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
