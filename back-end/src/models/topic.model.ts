import { getModelForClass, prop } from '@typegoose/typegoose';

export class Topic {
  @prop({ required: true, unique: true })
  public name!: string;

  @prop({ required: true, unique: true })
  public slug!: string;

  @prop({ required: true })
  public popularity!: number;

  @prop()
  public desc?: string;

  @prop()
  public imgUrl?: string;
}

export const TopicModel = getModelForClass(Topic);
