import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patch, PatchDocument } from './schemas/patch.schema';

@Injectable()
export class PatchService {
  constructor(
    @InjectModel(Patch.name) private patchModel: Model<PatchDocument>,
  ) {}

  async findAll(): Promise<Patch[]> {
    return this.patchModel.find().sort({ 'version.patch_id': -1 }).exec();
  }
}
