import { TestBed } from '@angular/core/testing';

import { MailTaskService } from './mail-task.service';

describe('MailTaskService', () => {
  let service: MailTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
