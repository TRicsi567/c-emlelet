import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ExplanationBlock from './ExplanationBlock';

describe('<ExplanationBlock />', () => {
  afterEach(cleanup);
  test('Renders correctly', () => {
    const className = 'class-name';
    const { container, rerender } = render(
      <ExplanationBlock className={className}>
        <div />
        <div />
      </ExplanationBlock>
    );

    expect(
      container.querySelector('.explanation-block-content-wrapper').childNodes
    ).toHaveLength(2);
    expect(container.firstChild).toHaveClass(className);

    rerender(
      <ExplanationBlock>
        <div />
      </ExplanationBlock>
    );

    expect(
      container.querySelector('.explanation-block-content-wrapper').childNodes
    ).toHaveLength(1);
    expect(container.firstChild).not.toHaveClass(className);
  });
});
