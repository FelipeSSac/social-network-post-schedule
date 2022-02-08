import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { LinkedinPreview } from '.';

describe('Linkedin Preview', () => {
  afterEach(cleanup);

  const formData = {
    id: 'id',
    social_network_key: ['2'],
    text: 'Preview Post',
    publication_date: '2022-12-01T12:00:00.000Z',
    status_key: 1,
    publication_day: '2022-12-01',
    publication_time: '12:00',
    status: 'status'
  }

  it('should render the Linkedin preview', () => {
    const { baseElement } = render(
      <LinkedinPreview
        formData={formData}
      />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should have post text "Preview Post"', async () => {
    const { findByText } = render(
      <LinkedinPreview
        formData={formData}
      />
    );

    const text = await findByText('Preview Post');

    expect(text).toBeInTheDocument();
  })

  it('should have post date "01 de dezembro"', async () => {
    const { findByText } = render(
      <LinkedinPreview
        formData={formData}
      />
    );

    const text = await findByText('01 de dezembro');

    expect(text).toBeInTheDocument();
  })

  it(`should have post user's name "Anselmo Carlos"`, async () => {
    const { findByText } = render(
      <LinkedinPreview
        formData={formData}
      />
    );

    const user = await findByText('Anselmo Carlos');

    expect(user).toBeInTheDocument();
  })
})
