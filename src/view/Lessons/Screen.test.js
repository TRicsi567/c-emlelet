import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { AppContext } from 'state/App/context';
import Screen from './Screen';

jest.mock('state/App/actions', () => ({
  loadTutorialDescriptions: ({ dispatch }) => {
    dispatch();
  },
  loadTutorial: ({ dispatch, id }) => {
    dispatch(id);
  }
}));

describe('<Screen /> lessons', () => {
  const history = createBrowserHistory();
  const state = {
    slideNum: 0,
    tutorial: {},
    tutorialDescriptions: [
      {
        id: 1,
        title: 'test-title-1',
        description: 'test-description',
        difficulty: 'beginner'
      },
      {
        id: 2,
        title: 'test-title-2',
        description: 'test-description',
        difficulty: 'beginner'
      },
      {
        id: 3,
        title: 'test-title-3',
        description: 'test-description',
        difficulty: 'expert'
      }
    ]
  };
  const dispatch = jest.fn();

  it('Renders correctly', () => {
    const { container } = render(
      <Router history={history}>
        <AppContext.Provider value={[state, dispatch]}>
          <Screen />
        </AppContext.Provider>
      </Router>
    );

    expect(
      container.querySelector('.lessons-grid-container').childNodes
    ).toHaveLength(3);

    expect(dispatch).toHaveBeenCalledTimes(1);
    fireEvent.click(
      container.querySelector('.lessons-grid-container').firstChild
    );
    expect(dispatch).toHaveBeenCalledTimes(2);

    expect(history.length).toEqual(2);
    expect(
      history.location.pathname.includes(state.tutorialDescriptions[0].id)
    ).toBeTruthy();
  });
});
