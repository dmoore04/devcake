import { getModelForClass, prop, Ref, pre, DocumentType } from '@typegoose/typegoose';
import { Content } from './content.model';
import bcrypt from 'bcrypt';
import { Document } from 'mongoose';

@pre<User>('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(this.password, salt);
    this.password = hash;
  }
  return next();
})
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
  public saved?: Ref<Content, string>[];

  @prop({ default: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' })
  public avatarUrl?: string;

  public comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password).catch((e) => false);
  }
}

export const UserModel = getModelForClass(User);
