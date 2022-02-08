import { useEffect, useState } from 'react';

// @ts-expect-error
import Linkedin from '../../../assets/images/postPreview/Pp-linkedin.svg?component';
// @ts-expect-error
import Like from '../../../assets/images/postPreview/Pp-like-in.svg?component';
// @ts-expect-error
import Comment from '../../../assets/images/postPreview/Pp-comment-in.svg?component';
// @ts-expect-error
import Share from '../../../assets/images/postPreview/Pp-share-in.svg?component';

import { ensurePtBrDate } from '../../../utils/ensurePtBrDate';

import { ILinkedinPreviewProps } from './interfaces/ILinkedinPreviewProps';
import { Container } from './styles';

export default function LinkedinPreview({
  formData
}: ILinkedinPreviewProps) {
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    setUrl(formData?.mediaUrl || formData?.media as string);
  }, [formData]);

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
            {(formData?.publication_day || formData?.publication_date)
              && ensurePtBrDate(formData?.publication_day || formData?.publication_date)}
          </h2>
        </div>
      </div>
      <p className="linkedin-preview__text">
        {formData?.text}
      </p>
      {url && (
        <img
          src={url}
          alt="Linkedin Preview"
          className="linkedin-preview__image"
        />
      )}
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
