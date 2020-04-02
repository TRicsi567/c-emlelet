import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const { children, className } = props;
  return <main className={className}>{children}</main>;
};

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string
};

Content.defaultProps = {
  className: ''
};

export { Content as default };
