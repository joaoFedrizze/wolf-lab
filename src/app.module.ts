import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SplashtextModule } from './splashtext/splashtext.module';
import { PatchModule } from './patch/patch.module';

@Module({
  imports: [
    SplashtextModule,
    PatchModule,
    MongooseModule.forRoot('mongodb://localhost:27017/wolflab'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
