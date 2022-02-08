import { render, cleanup } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { SocialNetworkIcon } from '.';

describe('Social Network Icon', () => {
  afterEach(cleanup);

  it('should render the Icon with Instagram', () => {
    const { baseElement } = render(
      <SocialNetworkIcon socialNetwork="Instagram" />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should render the Icon with Linkedin', () => {
    const { baseElement } = render(
      <SocialNetworkIcon socialNetwork="Linkedin" />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should render the Icon with Youtube', () => {
    const { baseElement } = render(
      <SocialNetworkIcon socialNetwork="Youtube" />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should render the Icon with Pinterest', () => {
    const { baseElement } = render(
      <SocialNetworkIcon socialNetwork="Pinterest" />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should render the Icon with Twitter', () => {
    const { baseElement } = render(
      <SocialNetworkIcon socialNetwork="Twitter" />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should render the Icon with Facebook', () => {
    const { baseElement } = render(
      <SocialNetworkIcon socialNetwork="Facebook" />
    );

    expect(baseElement).toBeInTheDocument();
  })
})
