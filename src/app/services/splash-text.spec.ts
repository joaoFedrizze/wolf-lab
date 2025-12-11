import { TestBed } from '@angular/core/testing';

import { SplashText } from './splash-text';

describe('SplashText', () => {
  let service: SplashText;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplashText);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
