import { Router } from 'express';
import { sendUsers, postUser } from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.route('/').get(sendUsers).post(postUser);

export default usersRouter;
