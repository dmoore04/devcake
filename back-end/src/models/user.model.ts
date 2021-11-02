import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { Topic } from './topic.model';
import { Media } from './media.model';
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

  @prop({ type: () => Topic, default: [] })
  public topics?: Topic[];

  @prop({ type: () => Media, default: [] })
  public media?: Media[];

  @prop({ ref: () => Content, default: [] })
  public saved?: Ref<Content>[];
}

export const UserModel = getModelForClass(User);
