import { TopicModel } from '../models/topic.model';

const findTopics = async () => TopicModel.find().sort({ popularity: 'desc' });

export default findTopics;
