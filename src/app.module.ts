import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatchModule } from './patch/patch.module';
import { SplashTextModule } from './splash-text/splash-text.module';

@Module({
  imports: [
    SplashTextModule,
    PatchModule,
    MongooseModule.forRoot('mongodb://localhost:27017/wolflab'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
