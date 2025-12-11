import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SplashTextDocument = SplashText & Document;

@Schema({ collection: 'splash_text' })
export class SplashText {
  @Prop({ default: true })
  item: string;

  @Prop({ default: true })
  item_id: number;

  @Prop({ default: true })
  isHide: boolean;
}

export const SplashTextSchema = SchemaFactory.createForClass(SplashText);
