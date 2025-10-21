import { Module } from '@nestjs/common';
import { SplashtextController } from './splashtext.controller';
import { SplashtextService } from './splashtext.service';

@Module({
  controllers: [SplashtextController],
  providers: [SplashtextService],
})
export class SplashtextModule {}
