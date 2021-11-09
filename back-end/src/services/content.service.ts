import { UserModel } from '../models';
import { ContentModel } from '../models/content.model';

const findContent = async (user_id?: any, page?: number, limit?: number) => {
  const user = await UserModel.findById(user_id);
  const query = user ? { type: { $in: user.media }, topic: { $in: user.topics } } : {};
  const options = { page, limit };
  const aggregate = ContentModel.aggregate([{ $match: query }, { $sample: { size: 10 } }]);
  return ContentModel.aggregatePaginate(aggregate, options);
};

export default findContent;
