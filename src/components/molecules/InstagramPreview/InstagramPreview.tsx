// @ts-expect-error
import Instagram from '../../../assets/images/postPreview/pp-instagram.svg?component';
// @ts-expect-error
import Like from '../../../assets/images/postPreview/pp-like-ig.svg?component';
// @ts-expect-error
import Comment from '../../../assets/images/postPreview/pp-comment-ig.svg?component';
// @ts-expect-error
import Share from '../../../assets/images/postPreview/pp-share-ig.svg?component';

import { IInstagramPreviewProps } from './interfaces/IInstagramPreviewProps';
import { Container } from './styles';

export default function InstagramPreview({
  formData,
}: IInstagramPreviewProps) {
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
      <img
        src={formData?.mediaUrl}
        alt={formData?.media?.name}
        className="instagram-preview__image"
      />
      <div className="instagram-preview__actions">
        <Like className="instagram-preview__like" />
        <Comment className="instagram-preview__comment" />
        <Share className="instagram-preview__share" />
      </div>
      <p className="instagram-preview__text">{formData?.text}</p>
    </Container>
  );
}