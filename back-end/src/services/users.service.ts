import { UserModel, User } from '../models';

export const findUsers = async () => UserModel.find();
export const saveUser = async (newUser: User) => {
  const user = await UserModel.create(newUser);
  return user;
};

export default findUsers;
