import { TestBed } from '@angular/core/testing';

import { CrudedificeService } from './crudedifice.service';

describe('CrudedificeService', () => {
  let service: CrudedificeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudedificeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
