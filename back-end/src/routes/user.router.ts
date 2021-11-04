import { Router } from 'express';
import sendUsers from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.get('/', sendUsers);

export default usersRouter;
