import { TestBed, async, inject } from '@angular/core/testing';

import { LeavingGuard } from './leaving.guard';

describe('LeavingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeavingGuard]
    });
  });

  it('should ...', inject([LeavingGuard], (guard: LeavingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
