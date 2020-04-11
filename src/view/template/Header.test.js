import React from 'react';
import Header from './Header';
import { render, cleanup } from '@testing-library/react';

describe('<Header />', () => {
  afterEach(cleanup);

  it('Renders correctly', () => {
    const testClassName = 'test-class-name';
    const { container, getByText } = render(
      <Header className={testClassName} />
    );
    expect(
      container.firstChild.firstChild.firstChild.className.includes(
        testClassName
      )
    ).toBe(true);
    expect(getByText('C-emlélet')).toBeInTheDocument();
  });
});
