// @ts-expect-error
import Linkedin from '../../../assets/images/postPreview/pp-linkedin.svg?component';
// @ts-expect-error
import Like from '../../../assets/images/postPreview/pp-like-in.svg?component';
// @ts-expect-error
import Comment from '../../../assets/images/postPreview/pp-comment-in.svg?component';
// @ts-expect-error
import Share from '../../../assets/images/postPreview/pp-share-in.svg?component';

import { ensurePtBrDate } from '../../../utils/ensurePtBrDate';

import { ILinkedinPreviewProps } from './interfaces/ILinkedinPreviewProps';
import { Container } from './styles';

export default function LinkedinPreview({
  formData,
}: ILinkedinPreviewProps) {
  return (
    <Container>
      <div className="linkedin-preview__header">
        <div className="linkedin-preview__header__icon-container">
          <Linkedin className="linkedin-preview__header__icon" />
        </div>
        <div>
          <h1 className="linkedin-preview__header__name">
            Anselmo Carlos
          </h1>
          <h2 className="linkedin-preview__header__date">
            {formData?.publication_day
              && ensurePtBrDate(formData?.publication_day)}
          </h2>
        </div>
      </div>
      <p className="linkedin-preview__text">
        {formData?.text}
      </p>
      <img
        src={formData?.mediaUrl}
        alt={formData?.media?.name}
        className="linkedin-preview__image"
      />
      <h2 className="linkedin-preview__comments">
        5 comentários
      </h2>
      <div className="linkedin-preview__action-container">
        <Like className="linkedin-preview__like" />
        <Comment className="linkedin-preview__comment" />
        <Share className="linkedin-preview__share" />
      </div>
    </Container>
  );
}
