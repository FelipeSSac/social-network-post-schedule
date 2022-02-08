import { render, cleanup, waitFor, fireEvent } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { NewScheduleForm } from '.';

describe('New Schedule Form', () => {
  afterEach(cleanup);

  const setState = jest.fn();

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

  it('should render the New Schedule Form', () => {
    const { baseElement } = render(
    <NewScheduleForm
      setFormData={setState}
      onSubmit={setState}
      formData={formData}
    />
    );

    expect(baseElement).toBeInTheDocument();
  })
})
