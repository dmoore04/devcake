import { Router } from 'express';
import {
  sendUsers,
  postUser,
  patchUser,
  loginUser,
  sendSavedContent,
} from '../controllers/users.controller';

const usersRouter = Router();

usersRouter.get('/:user_id/saved', sendSavedContent);
usersRouter.patch('/:user_id', patchUser);
usersRouter.post('/login', loginUser);
usersRouter.route('/').get(sendUsers).post(postUser);

export default usersRouter;
