import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { InstagramPreview } from '.';


describe('Instagram Preview', () => {
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

  it('should render the Instagram preview', () => {
    const { baseElement } = render(
      <InstagramPreview
        formData={formData}
      />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should have post text "Preview Post"', async () => {
    const { findByText } = render(
      <InstagramPreview
        formData={formData}
      />
    );

    const text = await findByText('Preview Post');

    expect(text).toBeInTheDocument();
  })

  it(`should have post user's name "Anselmo Carlos"`, async () => {
    const { findByText } = render(
      <InstagramPreview
        formData={formData}
      />
    );

    const user = await findByText('Anselmo Carlos');

    expect(user).toBeInTheDocument();
  })
})
