import { getModelForClass, prop } from '@typegoose/typegoose';

export class Provider {
  @prop({ required: true, unique: true })
  name!: string;

  @prop({ required: true, unique: true })
  id!: string;

  @prop({ required: true })
  type!: string;

  @prop()
  url?: string;
}

export const ProviderModel = getModelForClass(Provider);
