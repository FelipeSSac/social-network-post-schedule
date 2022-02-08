import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { Header } from '.';

describe('Header', () => {
  afterEach(cleanup);

  it('should render the Header', () => {
    const { baseElement } = render(
      <Header />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should have User Box component', async () => {
    const { findByText } = render(
      <Header />
    );

    const username = await findByText('Anselmo Carlos');

    expect(username).toBeInTheDocument();
  })
})
