import { Router } from 'express';
import sendMedia from '../controllers/media.controller';

const mediaRouter = Router();

mediaRouter.get('/', sendMedia);

export default mediaRouter;
