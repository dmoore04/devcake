import { Router } from 'express';
import sendEndpoints from '../controllers/api.controllers';

const apiRouter = Router();

apiRouter.get('/', sendEndpoints);

export default apiRouter;
