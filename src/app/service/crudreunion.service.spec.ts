import { TestBed } from '@angular/core/testing';

import { CrudreunionService } from './crudreunion.service';

describe('CrudreunionService', () => {
  let service: CrudreunionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudreunionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
