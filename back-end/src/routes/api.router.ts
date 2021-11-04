import { Router } from 'express';
import sendEndpoints from '../controllers/api.controllers';
import topicsRouter from './topics.router';
import mediaRouter from './media.router';
import contentRouter from './content.router';

const apiRouter = Router();

apiRouter.use('/topics', topicsRouter);
apiRouter.use('/media', mediaRouter);
apiRouter.use('/content', contentRouter);
apiRouter.get('/', sendEndpoints);

export default apiRouter;
