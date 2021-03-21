import { TestBed } from '@angular/core/testing';

import { CrudpisosService } from './crudpisos.service';

describe('CrudpisosService', () => {
  let service: CrudpisosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudpisosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
