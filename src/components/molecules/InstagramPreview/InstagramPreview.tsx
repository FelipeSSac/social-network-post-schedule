import { useEffect, useState } from 'react';

// @ts-expect-error
import Instagram from '../../../assets/images/postPreview/Pp-instagram.svg?component';
// @ts-expect-error
import Like from '../../../assets/images/postPreview/Pp-like-ig.svg?component';
// @ts-expect-error
import Comment from '../../../assets/images/postPreview/Pp-comment-ig.svg?component';
// @ts-expect-error
import Share from '../../../assets/images/postPreview/Pp-share-ig.svg?component';

import { IInstagramPreviewProps } from './interfaces/IInstagramPreviewProps';
import { Container } from './styles';

export default function InstagramPreview({
  formData,
}: IInstagramPreviewProps) {
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    setUrl(formData?.mediaUrl || formData?.media as string);
  }, [formData]);

  return (
    <Container>
      <div className="instagram-preview__header">
        <div className="instagram-preview__header__icon-container">
          <Instagram className="instagram-preview__header__icon" />
        </div>
        <h1 className="instagram-preview__header__name">
          Anselmo Carlos
        </h1>
      </div>
      {url && (
      <img
        src={url}
        alt="Instagram Preview"
        className="instagram-preview__image"
      />
      )}
      <div className="instagram-preview__actions">
        <Like className="instagram-preview__like" />
        <Comment className="instagram-preview__comment" />
        <Share className="instagram-preview__share" />
      </div>
      <p className="instagram-preview__text">{formData?.text}</p>
    </Container>
  );
}
