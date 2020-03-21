import React, { useState } from 'react';
import TextExplanation from 'view/lessons/lesson/TextExplanation';
import CodeExplanation from 'view/lessons/lesson/CodeExample';
import VisualExplanation from 'view/lessons/lesson/VisualExplanation';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import 'view/lessons/LessonScreen.scss';
import PropTypes from 'prop-types';

const LessonScreen = ({ match }) => {
  let [slideNumber, setSlideNumber] = useState(0);

  const lesson = getLesson(match.params.id);

  function getLesson(lessonId) {
    return require('view/lessons/lessons.json').lessons[lessonId];
  }

  function onNext() {
    if (slideNumber < lesson.length - 1) {
      setSlideNumber(slideNumber + 1);
    }
  }

  function onPrevious() {
    if (slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
    }
  }

  return (
    <>
      <Link to='/'>
        <Button size='medium' className='lesson-button'>
          Home
        </Button>
      </Link>
      <ul>
        <li>
          <TextExplanation
            textExplanations={lesson.textExplanations}
            slideNumber={slideNumber}
          />
        </li>
        <li>
          <CodeExplanation exampleCode={lesson.exampleCode} />
        </li>
        <li>
          <VisualExplanation
            visualExplanationImageNames={lesson.visualExplanationImageNames}
            slideNumber={slideNumber}
          />
        </li>
      </ul>
      <ul>
        <li>
          <Button className='lesson-button' onClick={onPrevious}>
            previous
          </Button>
        </li>
        <li>
          <p>{slideNumber + 1}</p>
        </li>
        <li>
          <Button className='lesson-button' onClick={onNext}>
            next
          </Button>
        </li>
      </ul>
    </>
  );
};

LessonScreen.propTypes = {
  match: PropTypes.object
};

export { LessonScreen as default };
