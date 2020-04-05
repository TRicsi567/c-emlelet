import React from 'react';
import PropTypes from 'prop-types';

const CodeExample = (props) => {
  const { exampleCode } = props;

  return <div>{exampleCode}</div>;
};

CodeExample.propTypes = {
  exampleCode: PropTypes.string
};

export { CodeExample as default };
