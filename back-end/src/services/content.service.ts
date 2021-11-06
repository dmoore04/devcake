import { UserModel } from '../models';
import { ContentModel } from '../models/content.model';
import mongoose from 'mongoose';

const findContent = async (user_id?: any, page?: number, limit?: number) => {
  const user = await UserModel.findById(user_id);
  const query = user ? { type: { $in: user.media }, topic: { $in: user.topics } } : {};
  return ContentModel.paginate(query, { page, limit });
};

export default findContent;
