import { MediaModel } from '../models/media.model';

const findMedia = async () => MediaModel.find();

export default findMedia;
