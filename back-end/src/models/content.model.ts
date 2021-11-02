import { getModelForClass, prop } from '@typegoose/typegoose';

export class Content {
  @prop({ required: true })
  title!: string;

  @prop({ required: true })
  url!: string;

  @prop({ required: true })
  provider!: string[];

  @prop({ required: true })
  type!: string[];

  @prop({ required: true })
  topic!: string;

  @prop()
  desc?: string;

  @prop()
  imgUrl?: string;
}

export const ContentModel = getModelForClass(Content);
