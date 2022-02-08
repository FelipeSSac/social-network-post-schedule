import { render, cleanup, waitFor, fireEvent } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { SchedulesTable } from '.';

describe('Schedule Table', () => {
  afterEach(cleanup);

  const fn = jest.fn();

  const schedules = [{
    id: '123',
    social_network_key: ['2'],
    media: '',
    text: 'texto do post',
    publication_date: '2022-12-12T12:00:00Z',
    status_key: 2,
  }]

  it('should render the Schedule Table', () => {
    const { baseElement } = render(
      <SchedulesTable
        schedules={schedules}
        sortByDate={fn}
        sortByStatus={fn}
        previewSchedule={fn}
      />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should render thead', () => {
    const { getByTestId } = render(
      <SchedulesTable
        schedules={schedules}
        sortByDate={fn}
        sortByStatus={fn}
        previewSchedule={fn}
      />
    );

    const tableHead = getByTestId('table-head');

    expect(tableHead).toBeInTheDocument();
  })

  it('should render tr', () => {
    const { getByTestId } = render(
      <SchedulesTable
        schedules={schedules}
        sortByDate={fn}
        sortByStatus={fn}
        previewSchedule={fn}
      />
    );

    const tableRow = getByTestId('table-row');

    expect(tableRow).toBeInTheDocument();
  })

  it('should render tbody', () => {
    const { getByTestId } = render(
      <SchedulesTable
        schedules={schedules}
        sortByDate={fn}
        sortByStatus={fn}
        previewSchedule={fn}
      />
    );

    const tableBody = getByTestId('table-body');

    expect(tableBody).toBeInTheDocument();
  })
})
