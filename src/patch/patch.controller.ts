import { Controller, Get, Post, Body } from '@nestjs/common';
import { PatchService } from './patch.service';

@Controller('patch')
export class PatchController {
  constructor(private readonly patchService: PatchService) {}

  @Get()
  async findAll() {
    return this.patchService.findAll();
  }
}
