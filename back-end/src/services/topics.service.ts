import { TopicModel } from '../models/topic.model';

export const findTopics = async () => TopicModel.find().sort({ popularity: 'desc' });
export const findTopicById = async (topic_id: any) => TopicModel.findById(topic_id);
