import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function handleClick() {
}

export default function LessonPreviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          C++
        </Typography>
        <Typography variant="h5" component="h2">
          Pointers
        </Typography>
        <Typography variant="body2" component="p">
          Learn how pointers work in C++ once and for all.
        </Typography>
      </CardContent>
      <CardActions>
        <Link to='lesson'>
          <Button size="small" onClick={handleClick}>Son of a bitch, I'm in!</Button>
        </Link>  
      </CardActions>
    </Card>
  );
}