import { Router } from 'express';
import { sendUsers, postUser, patchUser, loginUser } from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.patch('/:user_id', patchUser);
usersRouter.post('/login', loginUser);
usersRouter.route('/').get(sendUsers).post(postUser);

export default usersRouter;
