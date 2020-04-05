import React, { useEffect } from 'react';
import Grid from 'view/template/Grid';
import Card from './Card';
import { useHistory } from 'react-router';
import { loadTutorial } from 'state/App/actions';
import './Screen.scss';
import { useAppContext } from 'state/App/context';
import { loadTutorialDescriptions } from 'state/App/actions';

const LessonListScreen = () => {
  const history = useHistory();
  const [state, dispatch] = useAppContext();

  const { tutorialDescriptions } = state;

  useEffect(() => {
    loadTutorialDescriptions(dispatch);
  }, [dispatch]);

  return (
    <Grid className='lessons-grid-container'>
      {tutorialDescriptions.map(({ id, title, description, difficulty }) => (
        <Card
          key={id}
          texts={{ title, description }}
          onClick={() => {
            loadTutorial(id, dispatch);
            history.push(`/${id}`);
          }}
          difficulty={difficulty}
        />
      ))}
    </Grid>
  );
};

export { LessonListScreen as default };
