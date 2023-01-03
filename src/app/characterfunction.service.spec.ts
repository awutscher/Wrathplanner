import { TestBed } from '@angular/core/testing';

import { CharacterfunctionService } from './characterfunction.service';

describe('CharacterfunctionService', () => {
  let service: CharacterfunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterfunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
