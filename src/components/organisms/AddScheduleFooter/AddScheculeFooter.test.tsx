import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import AddScheduleNav from './AddScheduleFooter';

describe('Add Schedule Footer', () => {
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

  const invalidFormData = {
    id: 'id',
    social_network_key: ['2'],
    text: 'Preview Post',
    publication_date: '',
    status_key: 1,
    publication_day: '',
    publication_time: '',
    status: 'status'
  }

  it('should render the Add Schedule Footer', () => {
    const { baseElement } = render(
      <AddScheduleNav
        formData={formData}
      />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should have cancel button', async () => {
    const { findByText } = render(
      <AddScheduleNav
        formData={formData}
      />
    );

    const button = await findByText('Cancelar');

    expect(button).toBeInTheDocument();
  })

  it('should have save button', async () => {
    const { findByText } = render(
      <AddScheduleNav
        formData={formData}
      />
    );

    const button = await findByText('Salvar rascunho');

    expect(button).toBeInTheDocument();
  })

  it('should have submit button', async () => {
    const { findByText } = render(
      <AddScheduleNav
        formData={formData}
      />
    );

    const button = await findByText('Agendar');

    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  })

  it('should have submit button disabled', async () => {
    const { findByText } = render(
      <AddScheduleNav
        formData={invalidFormData}
      />
    );

    const button = await findByText('Agendar');

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  })
})
