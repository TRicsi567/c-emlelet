import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppProvider from 'state/App/context';
import Screen from './Screen';

describe('<Screen /> lesson', () => {
  afterEach(cleanup);
  const history = createBrowserHistory();
  history.location.pathname = '/0';

  test('Renders correctly', () => {
    const { container } = render(
      <Router history={history}>
        <AppProvider>
          <Screen />
        </AppProvider>
      </Router>
    );

    expect(
      container.querySelector('.slide-counter').textContent.includes('1')
    ).toBeTruthy();
    fireEvent.click(container.querySelector('.next-button'));
    expect(
      container.querySelector('.slide-counter').textContent.includes('2')
    ).toBeTruthy();
    fireEvent.click(container.querySelector('.prev-button'));
    expect(
      container.querySelector('.slide-counter').textContent.includes('1')
    ).toBeTruthy();
    fireEvent.click(container.querySelector('.back-button'));
    expect(history.length).toEqual(2);
  });
});
