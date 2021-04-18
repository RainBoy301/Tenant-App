import { TestBed } from '@angular/core/testing';

import { ListingServiceService } from './listing-service.service';

describe('ListingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListingServiceService = TestBed.get(ListingServiceService);
    expect(service).toBeTruthy();
  });
});
