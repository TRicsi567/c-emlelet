import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('<Card />', () => {
  afterEach(cleanup);

  test('Renders with default props', () => {
    const props = {
      texts: {
        title: 'test-title',
        description: 'test-description'
      }
    };

    const { container, queryByText } = render(<Card {...props} />);
    fireEvent.click(container.querySelector('.card-root'));
    expect(queryByText(/kezdő/i)).toBeInTheDocument();
    expect(queryByText(props.texts.title)).toBeInTheDocument();
    expect(queryByText(props.texts.description)).toBeInTheDocument();
  });

  test('onClick, difficulty prop works', () => {
    const props = {
      texts: {
        title: 'test-title',
        description: 'test-description'
      },
      onClick: jest.fn(),
      difficulty: 'intermediate'
    };

    const { container, queryByText, rerender } = render(<Card {...props} />);
    fireEvent.click(container.querySelector('.card-root'));
    expect(props.onClick).toHaveBeenCalledTimes(1);
    expect(queryByText(/haladó/i)).toBeInTheDocument();
    rerender(<Card {...props} difficulty={'expert'} />);
    expect(queryByText(/nehéz/i)).toBeInTheDocument();
  });
});
