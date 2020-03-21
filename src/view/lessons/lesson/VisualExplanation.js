import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';

VisualExplanation.propTypes = {
  visualExplanationImageNames: PropTypes.array,
  slideNumber: PropTypes.number
};

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

export default function VisualExplanation(props) {
  const classes = useStyles();
  const visualExplanationImageNames = props.visualExplanationImageNames;
  const slideNumber = props.slideNumber;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={require('images/' + visualExplanationImageNames[slideNumber])}
        title='Wow this place is really heavy'
      />
    </Card>
  );
}
