import { Test, TestingModule } from '@nestjs/testing';
import { SplashTextController } from './splash-text.controller';

describe('SplashTextController', () => {
  let controller: SplashTextController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SplashTextController],
    }).compile();

    controller = module.get<SplashTextController>(SplashTextController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
