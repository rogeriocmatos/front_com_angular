import { TestBed } from '@angular/core/testing';

import { CaastroService } from './caastro.service';

describe('CaastroService', () => {
  let service: CaastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
