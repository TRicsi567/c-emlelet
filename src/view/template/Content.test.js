import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Content from './Content';

const TestComponent = () => <div>test-text-almafa</div>;

describe('<Content />', () => {
  afterEach(cleanup);

  test('Renders corretly', () => {
    const className = 'test-class-name';

    const { container, getByText, rerender } = render(
      <Content className={className}>
        <TestComponent />
      </Content>
    );
    expect(getByText('test-text-almafa')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(className);

    rerender(
      <Content>
        <TestComponent />
        <div />
      </Content>
    );

    expect(container.firstChild).not.toHaveClass(className);
  });
});
