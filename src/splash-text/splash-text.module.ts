import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SplashTextController } from './splash-text.controller';
import { SplashTextService } from './splash-text.service';
import { SplashText, SplashTextSchema } from './schema/splash-text.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SplashText.name, schema: SplashTextSchema },
    ]),
  ],
  controllers: [SplashTextController],
  providers: [SplashTextService],
})
export class SplashTextModule {}
