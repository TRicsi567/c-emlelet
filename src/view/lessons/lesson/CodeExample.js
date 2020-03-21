import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 500
  }
});

export default function CodeExample(props) {
  const classes = useStyles();
  const exampleCode = props.exampleCode;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='body2' component='p'>
          {exampleCode}
        </Typography>
      </CardContent>
    </Card>
  );
}

CodeExample.propTypes = {
  exampleCode: PropTypes.string
};
