import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { SuccessScheduleModal } from '.';


describe('Success Schedule Modal', () => {
  afterEach(cleanup);

  it('should render the Success Schedule Modal', () => {
    const { baseElement } = render(
      <SuccessScheduleModal />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should have close button', async () => {
    const { findByText } = render(
      <SuccessScheduleModal />
    );

    const button = await findByText('OK');

    expect(button).toBeInTheDocument();
  })
})
