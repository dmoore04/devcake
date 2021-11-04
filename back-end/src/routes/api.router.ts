import { Router } from 'express';
import sendEndpoints from '../controllers/api.controllers';
import topicsRouter from './topics.router';

const apiRouter = Router();

apiRouter.use('/topics', topicsRouter);
apiRouter.get('/', sendEndpoints);

export default apiRouter;
