import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { SocialNetworkButton } from '.';


describe('Social Network Button', () => {
  afterEach(cleanup);

  it('should render the button with Instagram', () => {
    const { baseElement } = render(
      <SocialNetworkButton
        socialNetwork="Instagram"
        selected
      />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should render the button with Linkedin', () => {
    const { baseElement } = render(
      <SocialNetworkButton
        socialNetwork="Linkedin"
        selected
      />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should have style properties', () => {
    const { container } = render(
      <SocialNetworkButton
        socialNetwork="Instagram"
        selected={false}
      />
    );

    expect(container.firstChild).toHaveStyle('width: 2.0625rem')
    expect(container.firstChild).toHaveStyle('height: 2.0625rem')

    expect(container.firstChild).toHaveStyle('display: flex')
    expect(container.firstChild).toHaveStyle('justify-content: center')
    expect(container.firstChild).toHaveStyle('align-items: center')

    expect(container.firstChild).toHaveStyle('border-radius: 50%')
    expect(container.firstChild).toHaveStyle('background: #fff')
    expect(container.firstChild).toHaveStyle('cursor: pointer')
  })

  it('should have all selected style properties ', () => {
    const { container } = render(
      <SocialNetworkButton
        socialNetwork="Instagram"
        selected
      />
    );

    expect(container.firstChild).toHaveStyle('background: linear-gradient(135deg, #EF9F2E 25%, #E02B4B 105.56%)')
    expect(container.firstChild).toHaveStyle('border: 1px solid #EF9F2E')
  })

  it('should not have all selected style properties ', () => {
    const { container } = render(
      <SocialNetworkButton
        socialNetwork="Instagram"
        selected={false}
      />
    );

    expect(container.firstChild).not.toHaveStyle('background: linear-gradient(135deg, #EF9F2E 25%, #E02B4B 105.56%)')
    expect(container.firstChild).not.toHaveStyle('border: 1px solid #EF9F2E')
  })
})
