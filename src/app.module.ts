import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SplashtextModule } from './splashtext/splashtext.module';

@Module({
  imports: [SplashtextModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
