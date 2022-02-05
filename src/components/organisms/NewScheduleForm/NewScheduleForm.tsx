import { SocialNetworkButton } from '../../atoms/SocialNetworkButton';
import { Card } from '../../molecules/Card';
import { ImageUpload } from '../../molecules/ImageUpload';
import { AddScheduleFooter } from '../AddScheduleFooter';
import { PostPreview } from '../PostPreview';

import { Container } from './styles';

export default function NewScheduleForm() {
  return (
    <Container>
      <div className="new-schedule-form__wrapper">
        <aside className="new-schedule-form__aside">
          <div className="new-schedule-form__aside__container">
            <Card title="Redes sociais">
              <div
                className="new-schedule-form__post-social-media__container"
              >
                <SocialNetworkButton
                  socialNetwork="instagram"
                />
                <SocialNetworkButton
                  socialNetwork="linkedin"
                />
                <SocialNetworkButton
                  socialNetwork="youtube"
                  disabled
                />
                <SocialNetworkButton
                  socialNetwork="pinterest"
                  disabled
                />
                <SocialNetworkButton
                  socialNetwork="twitter"
                  disabled
                />
                <SocialNetworkButton
                  socialNetwork="facebook"
                  disabled
                />
              </div>
            </Card>
            <Card title="Data de publicação">
              <div className="new-schedule-form__post-date__container">
                <input
                  type="date"
                  className="new-schedule-form__post-date__date"
                />
                <input
                  type="time"
                  className="new-schedule-form__post-date__time"
                />
              </div>
            </Card>
          </div>
          <Card
            title="Texto do post"
            className="new-schedule-form__post-text"
          >
            <textarea
              className="new-schedule-form__post-text__textarea"
              placeholder="Aqui vai o texto descritivo desse post"
            />
          </Card>
          <Card
            title="Upload de imagem"
            className="new-schedule-form__image-upload"
          >
            <ImageUpload />
          </Card>
        </aside>
        <Card
          title="Visualização do post"
          className="new-schedule-form__post-preview"
        >
          <PostPreview />
        </Card>
      </div>
      <AddScheduleFooter />
    </Container>
  );
}
