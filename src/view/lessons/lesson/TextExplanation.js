import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 500
  }
});

export default function TextExample() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='body2' component='p'>
          When writing C++ code, make sure you dont do any oopsies.
        </Typography>
      </CardContent>
    </Card>
  );
}
