import { Controller, Get } from '@nestjs/common';
import { SplashtextService } from './splashtext.service';

@Controller('splashtext')
export class SplashtextController {
  constructor(private readonly splashtextService: SplashtextService) {}

  // Rota que retorna todos os textos
  @Get()
  getAll() {
    return { splashtexts: this.splashtextService.findAll() };
  }
}
