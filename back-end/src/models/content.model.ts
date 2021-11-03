import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'content' } })
export class Content {
  @prop({ required: true })
  title!: string;

  @prop({ required: true })
  url!: string;

  @prop({ type: () => String, required: true })
  provider!: string[];

  @prop({ type: () => String, required: true })
  type!: string[];

  @prop({ type: () => String, required: true })
  topic!: string;

  @prop()
  desc?: string;

  @prop()
  imgUrl?: string;
}

export const ContentModel = getModelForClass(Content);
