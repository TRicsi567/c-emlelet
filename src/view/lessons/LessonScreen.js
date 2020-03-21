import React from 'react';
import TextExplanation from 'view/lessons/lesson/TextExplanation';
import CodeExplanation from 'view/lessons/lesson/CodeExample';
import VisualExplanation from 'view/lessons/lesson/VisualExplanation';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import 'view/lessons/LessonScreen.scss';

const LessonScreen = () => {
  return (
    <>
      <Link to='/'>
        <Button size='medium' className='lesson-button'>
          Home
        </Button>
      </Link>
      <ul>
        <li>
          <TextExplanation />
        </li>
        <li>
          <CodeExplanation />
        </li>
        <li>
          <VisualExplanation />
        </li>
      </ul>
      <ul>
        <li>
          <Button className='lesson-button'>next</Button>
        </li>
        <li>
          <p>5</p>
        </li>
        <li>
          <Button className='lesson-button'>previous</Button>
        </li>
      </ul>
    </>
  );
};

export { LessonScreen as default };
