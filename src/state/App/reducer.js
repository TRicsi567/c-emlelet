import actions from './actions';

const {
  NEXT_SIDE,
  PREV_SLIDE,
  LOAD_TUTORIAL,
  LOAD_TUTORIAL_DESCRIPTIONS
} = actions;

const initialState = {
  slideNum: 0,
  tutorial: {},
  tutorialDescriptions: []
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case NEXT_SIDE: {
      const { tutorial, slideNum } = state;

      return {
        ...state,
        slideNum: slideNum !== tutorial.length - 1 ? slideNum + 1 : slideNum
      };
    }
    case PREV_SLIDE: {
      const { slideNum } = state;

      return {
        ...state,
        slideNum: slideNum !== 0 ? slideNum - 1 : 0
      };
    }
    case LOAD_TUTORIAL: {
      return { ...state, tutorial: { ...payload }, slideNum: 0 };
    }
    case LOAD_TUTORIAL_DESCRIPTIONS: {
      return { ...state, tutorialDescriptions: [...payload] };
    }
    default: {
      return state;
    }
  }
};

export { reducer, initialState };
