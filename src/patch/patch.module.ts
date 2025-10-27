import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PatchController } from './patch.controller';
import { PatchService } from './patch.service';
import { Patch, PatchSchema } from './schemas/patch.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Patch.name, schema: PatchSchema }]),
  ],
  controllers: [PatchController],
  providers: [PatchService],
})
export class PatchModule {}
