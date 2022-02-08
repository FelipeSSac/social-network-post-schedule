import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { PostPreview } from '.';

describe('Post Preview', () => {
  afterEach(cleanup);

  const formData = {
    id: 'id',
    social_network_key: [],
    text: 'Preview Post',
    publication_date: '2022-12-01T12:00:00.000Z',
    status_key: 1,
    publication_day: '2022-12-01',
    publication_time: '12:00',
    status: 'status'
  }

  it('should render the Post Preview', () => {
    const { baseElement } = render(
      <PostPreview formData={formData} />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should not render some preview', () => {
    const { getByText } = render(
      <PostPreview formData={formData} />
    );

    const placeholder = getByText('Aguardando conteúdo. Informe os canais e as mídias desejadas para visualização.');

    expect(placeholder).toBeInTheDocument();
  })
})
