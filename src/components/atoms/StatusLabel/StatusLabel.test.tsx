import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { StatusLabel } from '.';


describe("Status Label", () => {
  afterEach(cleanup);

  it("should render the button", () => {
    const status = {
      id: 1,
      color: '#0ff',
      name: 'Active',
    }

    const { baseElement } = render(
      <StatusLabel status={status} />
    );

    expect(baseElement).toBeInTheDocument();
  });

  it("should have text 'Active'", async () => {
    const status = {
      id: 1,
      color: '#0ff',
      name: 'Active',
    }

    const { findByText } = render(
      <StatusLabel status={status} />
    );

    const text = await findByText('Active');

    expect(text).toBeInTheDocument();
  });

  it("should have text 'Inactive'", async () => {
    const status = {
      id: 1,
      color: '#0ff',
      name: 'Inactive',
    }

    const { findByText } = render(
      <StatusLabel status={status} />
    );

    const text = await findByText('Inactive');

    expect(text).toBeInTheDocument();
  });
})
