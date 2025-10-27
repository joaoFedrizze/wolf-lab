import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PatchDocument = Patch & Document;

@Schema({ _id: false })
class PatchListItem {
  @Prop()
  text?: string;

  @Prop()
  code?: string;
}

@Schema({ _id: false })
class PatchListGroup {
  @Prop({ type: [PatchListItem] })
  items: PatchListItem[];
}

@Schema({ _id: false })
class PatchContent {
  @Prop({ required: true })
  title: string;

  @Prop()
  icon: string;

  @Prop({ tpe: [PatchListGroup] })
  list: PatchListGroup[];
}

@Schema({ _id: false })
class PatchVersion {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  patch_id: number;
}

@Schema({ timestamps: true })
export class Patch {
  @Prop({ type: PatchVersion, required: true })
  version: PatchVersion;

  @Prop({ type: [PatchContent], required: true })
  content: PatchContent[];
}

export const PatchSchema = SchemaFactory.createForClass(Patch);
