import { Card } from '../../molecules/Card';
import { PostSocialNetwork } from '../PostSocialNetwork';
import { PostDate } from '../PostDate';
import { PostText } from '../PostText';
import { ImageUpload } from '../ImageUpload';
import { PostPreview } from '../PostPreview';
import { AddScheduleFooter } from '../AddScheduleFooter';

import { INewScheduleFormProps } from './interfaces/INewScheduleFormProps';
import { Container } from './styles';

export default function NewScheduleForm({
  formData, setFormData, onSubmit
}:INewScheduleFormProps) {
  return (
    <Container onSubmit={onSubmit}>
      <div className="new-schedule-form__wrapper">
        <aside className="new-schedule-form__aside">
          <div className="new-schedule-form__aside__container">
            <Card title="Redes sociais">
              <PostSocialNetwork setFormData={setFormData} />
            </Card>
            <Card title="Data de publicação">
              <PostDate setFormData={setFormData} />
            </Card>
          </div>
          <Card
            title="Texto do post"
            className="new-schedule-form__post-text"
          >
            <PostText setFormData={setFormData} />
          </Card>
          <Card
            title="Upload de imagem"
            className="new-schedule-form__image-upload"
          >
            <ImageUpload setFormData={setFormData} />
          </Card>
        </aside>
        <Card
          title="Visualização do post"
          className="new-schedule-form__post-preview"
        >
          <PostPreview formData={formData} />
        </Card>
      </div>
      <AddScheduleFooter
        formData={formData}
      />
    </Container>
  );
}
