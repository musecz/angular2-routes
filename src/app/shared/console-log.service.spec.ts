/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsoleLogService } from './console-log.service';

describe('Service: ConsoleLog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsoleLogService]
    });
  });

  it('should ...', inject([ConsoleLogService], (service: ConsoleLogService) => {
    expect(service).toBeTruthy();
  }));
});
