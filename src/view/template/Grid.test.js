import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Grid from './Grid';

const TestComponent = () => <div>almafa</div>;

describe('<Grid />', () => {
  afterEach(cleanup);

  test('Renders correctly', () => {
    const className = 'test-class-name';
    const { container, rerender } = render(
      <Grid className={className}>
        <TestComponent />
        <TestComponent />
      </Grid>
    );
    expect(container.firstChild).toHaveClass(className);
    expect(container.firstChild.childNodes).toHaveLength(2);

    rerender(
      <Grid>
        <TestComponent />
      </Grid>
    );
    expect(container.firstChild).not.toHaveClass(className);
    expect(container.firstChild.childNodes).toHaveLength(1);
  });
});
