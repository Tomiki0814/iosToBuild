import { TestBed } from '@angular/core/testing';

import { PaperRequestService } from './paper-request.service';

describe('PaperRequestService', () => {
  let service: PaperRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaperRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
