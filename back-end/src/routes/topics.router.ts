import { Router } from 'express';
import { sendTopics, sendTopic } from '../controllers/topics.controller';

const topicsRouter = Router();

topicsRouter.get('/:topic_id', sendTopic);
topicsRouter.get('/', sendTopics);

export default topicsRouter;
