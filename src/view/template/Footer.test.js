import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {
  afterEach(cleanup);

  test('Renders correctly', () => {
    const className = 'test-class-name';
    const { container, rerender, getByAltText } = render(
      <Footer className={className} />
    );

    expect(container.firstChild).toHaveClass(className);
    rerender(<Footer />);
    expect(container.firstChild).not.toHaveClass(className);
    expect(getByAltText('git-hub-repo-link')).toBeInTheDocument();
  });
});
