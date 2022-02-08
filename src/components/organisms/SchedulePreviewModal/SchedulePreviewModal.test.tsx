import { render, cleanup, waitFor, fireEvent } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { SchedulePreviewModal } from '.';

describe('SchedulePreviewModal', () => {
  afterEach(cleanup);

  const schedule = {
    id: '123',
    social_network_key: ['2'],
    media: '',
    text: 'texto do post',
    publication_date: '2022-12-12T12:00:00Z',
    status_key: 2,
  }

  it('should render the Schedule Preview Modal', () => {
    const { baseElement } = render(
      <SchedulePreviewModal schedule={schedule} />
    );

    expect(baseElement).toBeInTheDocument();
  })
})
