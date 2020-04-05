import React from 'react';
import FancyButton from './FancyButton';
import { render, fireEvent } from '@testing-library/react';

describe('<FancyButton />', () => {
  const text = 'Test-Label';
  it('Renders correctly', () => {
    const handleClick = jest.fn();

    const { getByText /*, debug */ } = render(
      <FancyButton onClick={handleClick}>{text}</FancyButton>
    );
    // debug();
    expect(getByText(text).textContent).toBe(text);
    fireEvent.click(getByText(text));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
