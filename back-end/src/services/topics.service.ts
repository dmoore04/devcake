import { TopicModel } from '../models/topic.model';

const findTopics = async () => TopicModel.find();

export default findTopics;
