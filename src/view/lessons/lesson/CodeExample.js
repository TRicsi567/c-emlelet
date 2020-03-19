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

export default function CodeExample() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='body2' component='p'>
          int main(): Henlo computor can u gib nice responsiv websight thx xoxo
        </Typography>
      </CardContent>
    </Card>
  );
}
