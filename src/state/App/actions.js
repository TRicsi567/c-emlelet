import tutorials from 'assets/lessons';

const actions = {
  LOAD_TUTORIAL: 'LOAD_TUTORIAL',
  LOAD_TUTORIAL_DESCRIPTIONS: 'LOAD_TUTORIAL_DESCRIPTIONS',
  NEXT_SIDE: 'NEXT_SLIDE',
  PREV_SLIDE: 'PREV_SLIDE'
};

const loadTutorialDescriptions = (dispatch) => {
  dispatch({
    type: actions.LOAD_TUTORIAL_DESCRIPTIONS,
    payload: tutorials.map(({ id, title, difficulty, description }) => ({
      id,
      title,
      difficulty,
      description
    }))
  });
};

const loadTutorial = (id, dispatch) => {
  dispatch({ type: actions.LOAD_TUTORIAL, payload: tutorials[id] });
};

const nextSlide = (dispatch) => {
  dispatch({ type: actions.NEXT_SIDE });
};

const prevSlide = (dispatch) => {
  dispatch({ type: actions.PREV_SLIDE });
};

export {
  actions as default,
  loadTutorial,
  nextSlide,
  prevSlide,
  loadTutorialDescriptions
};
