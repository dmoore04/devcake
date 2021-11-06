import { UserModel, User } from '../models';

export const findUsers = async () => UserModel.find();

export const saveUser = async (newUser: User) => await UserModel.create(newUser);

export const updateUser = async (user_id: any, update: Partial<User>) =>
  await UserModel.findByIdAndUpdate(user_id, update, {
    returnDocument: 'after',
  });
