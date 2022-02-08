import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { UserBox } from '.';

describe('User Box', () => {
  afterEach(cleanup);

  it('should render the user box', () => {
    const { baseElement } = render(<UserBox userName="John Doe" />);

    expect(baseElement).toBeInTheDocument();
  })

  it('should have name as "John Doe"', async () => {
    const { findByText } = render(<UserBox userName="John Doe" />);

    const box = await findByText('John Doe');

    expect(box).toBeInTheDocument();
  })
})
