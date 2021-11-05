import { ContentModel } from '../models/content.model';

const findContent = async (page: number, limit: number) =>
  ContentModel.paginate({}, { page, limit });

export default findContent;
