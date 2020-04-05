import React from 'react';
import PropTypes from 'prop-types';

const Grid = (props) => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string
};

Grid.defaultProps = {
  children: undefined,
  className: ''
};

export { Grid as default };
