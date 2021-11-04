import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Content } from './content.model';

export class User {
  @prop({ required: true })
  public name!: string;

  @prop({ required: true, unique: true })
  public email!: string;

  @prop({ required: true, unique: true })
  public username!: string;

  @prop({ required: true })
  public password!: string;

  @prop({ type: () => String, default: [] })
  public topics?: string[];

  @prop({ type: () => String, default: [] })
  public media?: string[];

  @prop({ ref: () => Content, default: [] })
  public saved?: Ref<Content>[];

  @prop({ default: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' })
  public avatarUrl?: string;
}

export const UserModel = getModelForClass(User);
