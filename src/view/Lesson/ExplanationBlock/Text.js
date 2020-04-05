import React from 'react';
import PropTypes from 'prop-types';

export default function TextExample(props) {
  const { slideNum, texts } = props;
  return <div>{texts[slideNum]}</div>;
}

TextExample.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string),
  slideNum: PropTypes.number
};

TextExample.defaultProps = {
  texts: [],
  slideNum: 0
};
