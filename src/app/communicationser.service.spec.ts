import { TestBed } from '@angular/core/testing';

import { CommunicationserService } from './communicationser.service';

describe('CommunicationserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunicationserService = TestBed.get(CommunicationserService);
    expect(service).toBeTruthy();
  });
});
