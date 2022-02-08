import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { Card } from '.';

describe('Card', () => {
  afterEach(cleanup);

  it('should render the card', () => {
    const { baseElement } = render(<Card title="Card Title">Card</Card>);

    expect(baseElement).toBeInTheDocument();
  })

  it('should have title as "Card Title"', async () => {
    const { findByText } = render(<Card title="Card Title">Card</Card>);

    const title = await findByText('Card Title');

    expect(title).toBeInTheDocument();
  })

  it('should have title as "Another Title"', async () => {
    const { findByText } = render(<Card title="Another Title">Card</Card>);

    const title = await findByText('Another Title');

    expect(title).toBeInTheDocument();
  })

  it('should have inner h1 element with text "h1 text"', async () => {
    const { findByText } = render(
      <Card title="Another Title">
        <h1>h1 text</h1>
      </Card>
    );

    const h1 = await findByText('h1 text');

    expect(h1).toBeInTheDocument();
  })

  it('should have inner p element with text "p text"', async () => {
    const { findByText } = render(
      <Card title="Another Title">
        <p>p text</p>
      </Card>
    );

    const p = await findByText('p text');

    expect(p).toBeInTheDocument();
  })

  it('should have defined styles', () => {
    const { container } = render(<Card title="Another Title">Card</Card>);

    expect(container.firstChild).toHaveStyle('width: 100%')
    expect(container.firstChild).toHaveStyle('max-width: 671px')
    expect(container.firstChild).toHaveStyle('height: fit-content')

    expect(container.firstChild).toHaveStyle('border: 1px solid var(--primary-gray)')
    expect(container.firstChild).toHaveStyle('border-radius: 0.25rem')
    expect(container.firstChild).toHaveStyle('background-color: #fff')
  })
})
