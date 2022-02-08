import { render, cleanup, waitFor, fireEvent } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { PostSocialNetwork } from '.';

describe('Post Social Network', () => {
  afterEach(cleanup);

  const setState = jest.fn();

  it('should render the Post Social Network', () => {
    const { baseElement } = render(
      <PostSocialNetwork setFormData={setState} />
    );

    expect(baseElement).toBeInTheDocument();
  })
})
