import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Content } from './content.model';

export class User {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true })
  public email!: string;

  @prop({ required: true })
  public username!: string;

  @prop({ required: true })
  private password!: string;

  @prop({ type: () => String, default: [] })
  public topics?: string[];

  @prop({ type: () => String, default: [] })
  public media?: string[];

  @prop({ ref: () => Content, default: [] })
  public saved?: Ref<Content>[];
}

export const UserModel = getModelForClass(User);