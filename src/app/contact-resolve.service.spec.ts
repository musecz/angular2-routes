/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactResolveService } from './contact-resolve.service';

describe('Service: ContactResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactResolveService]
    });
  });

  it('should ...', inject([ContactResolveService], (service: ContactResolveService) => {
    expect(service).toBeTruthy();
  }));
});
