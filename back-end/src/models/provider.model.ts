import { getModelForClass, prop } from '@typegoose/typegoose';

export class Provider {
  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  id!: string;

  @prop()
  url?: string;
}

export const ProviderModel = getModelForClass(Provider);
