import React from 'react';
import TextExplanation from 'view/lessons/lesson/TextExplanation';
import CodeExplanation from 'view/lessons/lesson/CodeExample';
import VisualExplanation from 'view/lessons/lesson/VisualExplanation';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import 'view/lessons/LessonScreen.scss';

const LessonPage = () => {
  return (
    <>
      <Link to='/'>
        <Button size='medium'>Home</Button>
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
          <Button>next</Button>
        </li>
        <li>
          <p>5</p>
        </li>
        <li>
          <Button>previous</Button>
        </li>
      </ul>
    </>
  );
};

export { LessonPage as default };
