import { getModelForClass, prop } from '@typegoose/typegoose';
import { Media } from './media.model';
import { Provider } from './provider.model';
import { Topic } from './topic.model';

export class Content {
  @prop({ required: true })
  title!: string;

  @prop({ required: true })
  url!: string;

  @prop({ type: () => Provider, required: true })
  provider!: Provider[];

  @prop({ type: () => Media, required: true })
  media!: Media[];

  @prop({ type: () => Topic, required: true })
  topic!: Topic[];

  @prop()
  desc?: string;

  @prop()
  imgUrl?: string;
}

export const ContentModel = getModelForClass(Content);
