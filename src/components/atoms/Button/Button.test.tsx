import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { Button } from '.';

describe('Button', () => {
  afterEach(cleanup);

  it('should render the button', () => {
    const { baseElement } = render(<Button>Button</Button>);

    expect(baseElement).toBeInTheDocument();
  });

  it('should render the button and have background cyan', () => {
    const { container } = render(<Button bgColor='#0ff' >Button</Button>);

    expect(container.firstChild).toHaveStyle('background-color: #0ff');
  });

  it('should render the button and have text color red', () => {
    const { container } = render(<Button textColor='#f00' >Button</Button>);

    expect(container.firstChild).toHaveStyle('color: #f00');
  });

  it('should render the button with no border and no background-color', () => {
    const { container } = render(<Button textOnly>Button</Button>);

    expect(container.firstChild).toHaveStyle('border: none')
    expect(container.firstChild).toHaveStyle('background-color: transparent');
  });

  it('should render the button with border and no background-color', () => {
    const { container } = render(
      <Button bgColor="#000" outlined>
        Button
      </Button>
    );

    expect(container.firstChild).toHaveStyle('border: 1px solid #000');
    expect(container.firstChild).toHaveStyle('background-color: transparent');
  });
})

