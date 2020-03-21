import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

LessonPreviewCard.propTypes = {
  lesson: PropTypes.object
};

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function LessonPreviewCard(props) {
  const classes = useStyles();
  const lesson = props.lesson;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          C++
        </Typography>
        <Typography variant='h5' component='h2'>
          {lesson.title}
        </Typography>
        <Typography variant='body2' component='p'>
          {lesson.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={'lesson/' + lesson.id}>
          <Button size='small'>Son of a bitch, Im in!</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
