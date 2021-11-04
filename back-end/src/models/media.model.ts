import { getModelForClass, prop } from '@typegoose/typegoose';

export class Media {
  @prop({ required: true, unique: true })
  type!: string;

  @prop()
  description?: string;
}

export const MediaModel = getModelForClass(Media);
