import { Router } from 'express';
import sendContent from '../controllers/content.controller';

const contentRouter = Router();

contentRouter.get('/', sendContent);

export default contentRouter;
