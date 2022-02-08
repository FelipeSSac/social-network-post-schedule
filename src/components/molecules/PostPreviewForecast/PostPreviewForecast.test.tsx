import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { PostPreviewForecast } from '.';

describe('Post Preview Forecast', () => {
  afterEach(cleanup);

  const formData = {
    id: 'id',
    social_network_key: ['1'],
    text: 'Preview Post',
    publication_date: '2022-12-01T12:00:00.000Z',
    status_key: 1,
    publication_day: '2022-12-01',
    publication_time: '12:00',
    status: 'status'
  }

  it('should render Post Preview Forecast on Instagram', () => {
    const { baseElement } = render(
      <PostPreviewForecast
        formData={formData}
        socialNetwork={'Instagram'}
      />
    );

    expect(baseElement).toBeInTheDocument();
  })


  it('should have post text "Preview Post" on Instagram', async () => {
    const { findByText } = render(
      <PostPreviewForecast
        formData={formData}
        socialNetwork={'Instagram'}
      />
    );

    const text = await findByText('Preview Post');

    expect(text).toBeInTheDocument();
  })

  it(`should have post user's name "Anselmo Carlos" on Instagram`, async () => {
    const { findByText } = render(
      <PostPreviewForecast
        formData={formData}
        socialNetwork={'Instagram'}
      />
    );

    const user = await findByText('Anselmo Carlos');

    expect(user).toBeInTheDocument();
  })

  it('should have post text "Preview Post" on Linkedin', async () => {
    const { findByText } = render(
      <PostPreviewForecast
        formData={formData}
        socialNetwork={'Linkedin'}
      />
    );

    const text = await findByText('Preview Post');

    expect(text).toBeInTheDocument();
  })

  it('should have post date "01 de dezembro" on Linkedin', async () => {
    const { findByText } = render(
      <PostPreviewForecast
        formData={formData}
        socialNetwork={'Linkedin'}
      />
    );

    const text = await findByText('01 de dezembro');

    expect(text).toBeInTheDocument();
  })

  it(`should have post user's name "Anselmo Carlos" on Linkedin`, async () => {
    const { findByText } = render(
      <PostPreviewForecast
        formData={formData}
        socialNetwork={'Linkedin'}
      />
    );

    const user = await findByText('Anselmo Carlos');

    expect(user).toBeInTheDocument();
  })
})
