import { Card } from '../../molecules/Card';
import { AddScheduleNav } from '../AddScheduleNav';

import { Container } from './styles';

export default function NewScheduleForm() {
  return (
    <Container>
      <div className="new-schedule-form__wrapper">
        <aside className="new-schedule-form__aside">
          <div className="new-schedule-form__aside__container">
            <Card title="Redes sociais" />
            <Card title="Data de publicação" />
          </div>
          <Card
            title="Texto do post"
            className="new-schedule-form__post-text"
          />
          <Card
            title="Upload de imagem"
            className="new-schedule-form__image-upload"
          />
        </aside>
        <Card
          title="Visualização do post"
          className="new-schedule-form__post-preview"
        />
      </div>
      <AddScheduleNav />
    </Container>
  );
}
