import { Router } from 'express';
import { sendUsers, postUser, patchUser } from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.patch('/:user_id', patchUser);
usersRouter.route('/').get(sendUsers).post(postUser);

export default usersRouter;
