import aggregatePaginate from 'mongoose-aggregate-paginate-v2';
import { getModelForClass, modelOptions, plugin, prop } from '@typegoose/typegoose';
import { Aggregate, PaginateOptions } from 'mongoose';

interface AggregatePaginateResult<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  page?: number | undefined;
  totalPages: number;
  nextPage?: number | null | undefined;
  prevPage?: number | null | undefined;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  meta?: any;
  [customLabel: string]: T[] | number | boolean | null | undefined;
}

type AggregatePaginateMethod<T> = (
  query?: Aggregate<T[]>,
  options?: PaginateOptions,
  callback?: (err: any, result: AggregatePaginateResult<T>) => void
) => Promise<AggregatePaginateResult<T>>;

@plugin(aggregatePaginate)
@modelOptions({ schemaOptions: { collection: 'content' } })
export class Content {
  @prop({ required: true, unique: true })
  title!: string;

  @prop({ required: true, unique: true })
  url!: string;

  @prop({ type: () => String, required: true })
  provider!: string[];

  @prop({ type: () => String, required: true })
  type!: string;

  @prop({ type: () => String, required: true })
  topic!: string;

  @prop()
  desc?: string;

  @prop()
  imgUrl?: string;

  static aggregatePaginate: AggregatePaginateMethod<Content>;
}

export const ContentModel = getModelForClass(Content);
