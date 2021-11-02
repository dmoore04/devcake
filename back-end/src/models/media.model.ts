import { getModelForClass, prop } from '@typegoose/typegoose';

export class Media {
  @prop({ required: true })
  type!: string;

  @prop()
  desc?: string;
}

export const MediaModel = getModelForClass(Media);
