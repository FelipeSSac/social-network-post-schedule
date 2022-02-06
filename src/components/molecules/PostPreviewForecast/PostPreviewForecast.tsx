import { cloneElement } from 'react';
import { IPostPreviewForecastProps } from './interfaces/IPostPreviewForecastProps';
import { PostPreviewItems } from './utils/PostPreviewItems';

import { IPostPreviewItemsKeys } from './interfaces/IPostPreviewItems';

export default function PostPreviewForecast({
  socialNetwork,
  formData,
}: IPostPreviewForecastProps) {
  const Component = PostPreviewItems[socialNetwork as IPostPreviewItemsKeys];

  return Component ? cloneElement(Component, { formData }) : null;
}
