import { render, cleanup, waitFor, fireEvent } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { PostText } from '.';

describe('Post Text', () => {
  afterEach(cleanup);

  const setState = jest.fn();

  it('should render the Post Text', () => {
    const { baseElement } = render(<PostText setFormData={setState} />);

    expect(baseElement).toBeInTheDocument();
  })

  it('should render textarea', () => {
    const { getByTestId } = render(<PostText setFormData={setState} />);

    const textarea = getByTestId('post-text');

    expect(textarea).toBeInTheDocument();
  })

  it('should write in textarea', () => {
    const { getByTestId } = render(<PostText setFormData={setState} />);

    const textarea = getByTestId('post-text') as HTMLTextAreaElement

    fireEvent.change(textarea, { target: { value: 'test' } });

    expect(textarea.value).toBe('test');
  })
})
