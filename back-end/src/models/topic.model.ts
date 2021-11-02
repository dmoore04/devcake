import { getModelForClass, prop } from '@typegoose/typegoose';

export class Topic {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public slug!: string;

  @prop({ required: true })
  public popularity!: number;

  @prop()
  public desc?: string;

  @prop()
  public imgUrl?: string;
}

export const TopicModel = getModelForClass(Topic);
