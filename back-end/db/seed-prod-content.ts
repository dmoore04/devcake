import axios, { AxiosRequestConfig } from 'axios';
import mongoose, { Model } from 'mongoose';
import { Content, ContentModel } from '../src/models/content.model';
import { Provider } from '../src/models/provider.model';
import { Topic } from '../src/models/topic.model';
import { connect, disconnect } from './connection';
import logger from '../src/utils/logger';

async function queryAPI(topic: string, provider: Provider): Promise<Model<Content>[] | false> {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://learning-objects-v2.p.rapidapi.com/search-provider',
    params: {
      keywords: topic,
      lang: 'en',
      provider: provider.id,
      sort: 'popularity',
      model: 'strict',
      max: '20',
      page: '0',
    },
    headers: {
      'x-rapidapi-host': 'learning-objects-v2.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY as string,
    },
  };

  try {
    const response = await axios.request(options);

    if (response.data.statusCode === 200) {
      const { content } = response.data.response;
      const normalized = content.map(
        (c: any) =>
          new ContentModel({
            title: c.title,
            url: c.url,
            provider: [c.provider],
            type: [provider.type],
            topic,
            desc: c.description || null,
            imgUrl: c.picture || null,
          })
      );
      return normalized;
    }

    return false;
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function seedProdContent(topics: Topic[], providers: Provider[]) {
  await connect();
  const { db } = mongoose.connection;
  await db.dropCollection('content');
  const collection = db.collection('content');

  try {
    providers.forEach((provider: Provider, i: number) => {
      topics.map((topic: Topic, j: number) =>
        setTimeout(async () => {
          const content = await queryAPI(topic.slug, provider);
          if (content && content.length > 0) {
            await collection.insertMany(content);
            logger.info(`Queried ${provider.name} for ${topic.name} content.`);
          }
        }, 500 * (i + 1) * (j + 1))
      );
    });
  } catch (error) {
    logger.error(error);
    await disconnect();
  }
}

export default seedProdContent;
