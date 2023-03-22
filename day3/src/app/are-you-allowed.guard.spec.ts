import { TestBed } from '@angular/core/testing';

import { AreYouAllowedGuard } from './are-you-allowed.guard';

describe('AreYouAllowedGuard', () => {
  let guard: AreYouAllowedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AreYouAllowedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
