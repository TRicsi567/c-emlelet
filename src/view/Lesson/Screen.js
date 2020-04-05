import React, { useCallback, useEffect } from 'react';
import TextExplanation from './ExplanationBlock/Text';
import CodeExplanation from './ExplanationBlock/Code';
import VisualExplanation from './ExplanationBlock/Visual';
import PropTypes from 'prop-types';
import Grid from 'view/template/Grid';
import ExplanationBlock from './ExplanationBlock';
import FancyButton from 'view/components/FancyButton';
import { nextSlide, prevSlide, loadTutorial } from 'state/App/actions';
import { useAppContext } from 'state/App/context';
import './Screen.scss';
import { useLocation, useHistory } from 'react-router';

const LessonScreen = () => {
  const [state, dispatch] = useAppContext();

  const { tutorial, slideNum } = state;
  const { textExplanations, exampleCode, visualExplanation } = tutorial;
  const { pathname } = useLocation();
  const history = useHistory();
  useEffect(() => {
    loadTutorial(Number(pathname.slice(1)), dispatch);
  }, [dispatch, pathname]);

  const handleNextSlide = useCallback(() => {
    nextSlide(dispatch);
  }, [dispatch]);

  const handlePrevSlide = useCallback(() => {
    prevSlide(dispatch);
  }, [dispatch]);

  const handleBack = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Grid className='lesson-grid-container'>
      <FancyButton className='back-button' onClick={handleBack}>
        Back
      </FancyButton>
      <ExplanationBlock className='text-explanation'>
        <TextExplanation texts={textExplanations} slideNum={slideNum} />
      </ExplanationBlock>
      <ExplanationBlock className='code-explanation'>
        <CodeExplanation exampleCode={exampleCode} />
      </ExplanationBlock>
      <ExplanationBlock className='visual-explanation'>
        <VisualExplanation images={visualExplanation} slideNum={slideNum} />
      </ExplanationBlock>
      <FancyButton
        className='prev-button'
        onClick={handlePrevSlide}
        disabled={slideNum === 0}
      >
        Previous
      </FancyButton>
      <FancyButton
        className='next-button'
        onClick={handleNextSlide}
        disabled={tutorial.length === slideNum + 1}
      >
        Next
      </FancyButton>
      <div className='slide-counter'>
        <span>{`${slideNum + 1} / ${tutorial.length}`}</span>
      </div>
    </Grid>
  );
};

LessonScreen.propTypes = {
  match: PropTypes.object
};

export { LessonScreen as default };
