/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PriceListService } from './price-list.service';

describe('Service: PriceList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceListService]
    });
  });

  it('should ...', inject([PriceListService], (service: PriceListService) => {
    expect(service).toBeTruthy();
  }));
});
