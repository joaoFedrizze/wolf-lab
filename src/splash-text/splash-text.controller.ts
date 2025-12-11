import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SplashTextService } from './splash-text.service';
import { CreateSplashTextDto } from './dto/create-splash-text.dto';
import { UpdateSplashTextDto } from './dto/update-splash-text.dto';

@Controller('splash-text')
export class SplashTextController {
  constructor(private readonly splashTextService: SplashTextService) {}

  @Get()
  async findAll() {
    return this.splashTextService.findAll();
  }

  @Get('list')
  async getList() {
    return this.splashTextService.findList();
  }

  @Post()
  async create(@Body() dto: CreateSplashTextDto) {
    return this.splashTextService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.splashTextService.delete(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateSplashTextDto) {
    return this.splashTextService.update(id, dto);
  }
}
