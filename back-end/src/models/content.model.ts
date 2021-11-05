import mongoosePaginate from 'mongoose-paginate-v2';
import { getModelForClass, modelOptions, plugin, prop } from '@typegoose/typegoose';
import { FilterQuery, PaginateOptions, PaginateResult } from 'mongoose';

type PaginateMethod<T> = (
  query?: FilterQuery<T>,
  options?: PaginateOptions,
  callback?: (err: any, result: PaginateResult<T>) => void
) => Promise<PaginateResult<T>>;

@plugin(mongoosePaginate)
@modelOptions({ schemaOptions: { collection: 'content' } })
export class Content {
  @prop({ required: true, unique: true })
  title!: string;

  @prop({ required: true, unique: true })
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

  static paginate: PaginateMethod<Content>;
}

export const ContentModel = getModelForClass(Content);
