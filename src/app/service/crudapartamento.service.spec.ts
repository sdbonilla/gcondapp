import { TestBed } from '@angular/core/testing';

import { CrudapartamentoService } from './crudapartamento.service';

describe('CrudapartamentoService', () => {
  let service: CrudapartamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudapartamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
