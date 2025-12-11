import { Test, TestingModule } from '@nestjs/testing';
import { SplashTextService } from './splash-text.service';

describe('SplashTextService', () => {
  let service: SplashTextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SplashTextService],
    }).compile();

    service = module.get<SplashTextService>(SplashTextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
