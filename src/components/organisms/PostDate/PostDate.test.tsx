import { render, cleanup, fireEvent } from '../../../utils/testUtils';
import '@testing-library/jest-dom/extend-expect';

import { PostDate } from '.';

describe('Post Date', () => {
  const setState = jest.fn();

  afterEach(cleanup);

  it('should render the Post Date', () => {
    const { baseElement } = render(
      <PostDate setFormData={setState} />
    );

    expect(baseElement).toBeInTheDocument();
  })

  it('should have input time', () => {
    const { getByTestId } = render(
      <PostDate setFormData={setState} />
    );

    const input = getByTestId('time-input');

    expect(input).toBeInTheDocument();
  })

  it('should have input date', () => {
    const { getByTestId } = render(
      <PostDate setFormData={setState} />
    );

    const input = getByTestId('date-input');

    expect(input).toBeInTheDocument();
  })

  it('should set date', () => {
    const { getByTestId } = render(
      <PostDate setFormData={setState} />
    );

    const input = getByTestId('date-input') as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: '2020-01-01' },
    })

    expect(input.value).toBe('2020-01-01');
  })

  it('should set time', () => {
    const { getByTestId } = render(
      <PostDate setFormData={setState} />
    );

    const input = getByTestId('time-input') as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: '12:00' },
    })

    expect(input.value).toBe('12:00');
  })
})
