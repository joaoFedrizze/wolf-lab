import { Controller, Get } from '@nestjs/common';
import { SplashtextService } from './splashtext.service';

@Controller('splashtext')
export class SplashtextController {
  constructor(private readonly splashtextService: SplashtextService) {}

  @Get()
  getAll() {
    return { splashtexts: this.splashtextService.findAll() };
  }
}
