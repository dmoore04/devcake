import { Router } from 'express';
import sendTopics from '../controllers/topics.controller';

const topicsRouter = Router();

topicsRouter.get('/', sendTopics);

export default topicsRouter;
