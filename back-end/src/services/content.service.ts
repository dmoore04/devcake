import { ContentModel } from '../models/content.model';

const findContent = async () => ContentModel.find();

export default findContent;
