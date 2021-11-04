import { Router } from 'express';
import sendEndpoints from '../controllers/api.controllers';
import topicsRouter from './topics.router';
import mediaRouter from './media.router';
import contentRouter from './content.router';
import usersRouter from './user.router';

const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/topics', topicsRouter);
apiRouter.use('/media', mediaRouter);
apiRouter.use('/content', contentRouter);
apiRouter.get('/', sendEndpoints);

export default apiRouter;
