import Empty from '../../../assets/images/postPreview/pp-empty.png';

import { Container } from './styles';

export default function PostPreview() {
  return (
    <Container>
      <h1 className="post-preview__empty-text">
        Aguardando conteúdo.
        Informe os canais e as mídias desejadas para visualização.
      </h1>
      <img
        src={Empty}
        alt="no preview"
        className="post-preview__empty-img"
      />
    </Container>
  );
}
