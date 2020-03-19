import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 500
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
});

export default function VisualExplanation() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={require('images/placeholder.jpg')}
        title='Wow this place is really heavy'
      />
    </Card>
  );
}
