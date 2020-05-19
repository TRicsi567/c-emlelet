import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppProvider from 'state/App';
import Header from './Header';

import { render, cleanup } from '@testing-library/react';

describe('<Header />', () => {
  afterEach(cleanup);

  it('Renders correctly', () => {
    const testClassName = 'test-class-name';
    const { getByText } = render(
      <Router history={createBrowserHistory()}>
        <AppProvider>
          <Header className={testClassName} />
        </AppProvider>
      </Router>
    );
    expect(getByText('C-emlélet')).toBeInTheDocument();
  });
});
