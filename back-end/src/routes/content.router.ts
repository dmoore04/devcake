import { Router } from 'express';
import { sendContentFeed, sendContent } from '../controllers/content.controller';

const contentRouter = Router();

contentRouter.get('/:content_id', sendContent);
contentRouter.get('/', sendContentFeed);

export default contentRouter;
