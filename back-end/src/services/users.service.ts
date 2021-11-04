import { UserModel } from '../models/user.model';

const findUsers = async () => UserModel.find();

export default findUsers;
