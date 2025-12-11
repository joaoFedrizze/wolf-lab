import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SplashText, SplashTextDocument } from './schema/splash-text.schema';

@Injectable()
export class SplashTextService {
  constructor(
    @InjectModel(SplashText.name)
    private readonly splashTextModel: Model<SplashTextDocument>,
  ) {}

  async findAll(): Promise<SplashText[]> {
    const data = await this.splashTextModel.find().exec();
    return data;
  }

  async findList(): Promise<String[]> {
    const items = await this.splashTextModel
      .find({ isHide: false }, { item: 1, _id: 0 })
      .exec();

    return items.map((doc) => doc.item);
  }

  async create(data: { text: string; active?: boolean }) {
    const last = await this.splashTextModel
      .findOne({ item_id: { $type: 'int' } })
      .sort({ item_id: -1 })
      .lean();
    const nextOrder = last ? last.item_id + 1 : 1;

    const finalData = {
      ...data,
      item_id: nextOrder,
    };

    const created = new this.splashTextModel(finalData);
    return created.save();
  }

  async delete(id: string) {
    const deleted = await this.splashTextModel.findByIdAndDelete(id).exec();

    console.log(`Try deleat ${id}`);

    if (!deleted) throw new NotFoundException('SplashText não encontrado');
    return deleted;
  }

  async update(id: string, data: Partial<SplashText>) {
    const updated = await this.splashTextModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    if (!updated) throw new NotFoundException('SplashText não encontrado');
    return updated;
  }
}
