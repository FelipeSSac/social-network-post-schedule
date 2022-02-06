import { InstagramPreview } from '../../InstagramPreview';
import { LinkedinPreview } from '../../LinkedinPreview';

import { IPostPreviewItems } from '../interfaces/IPostPreviewItems';

export const PostPreviewItems: IPostPreviewItems = {
  Linkedin: <LinkedinPreview />,
  Instagram: <InstagramPreview />,
};
