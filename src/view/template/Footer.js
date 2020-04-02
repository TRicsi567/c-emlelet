import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = (props) => {
  const { className } = props;
  return <footer className={className}>almafa</footer>;
};

Footer.propTypes = {
  className: PropTypes.string
};

Footer.defaultProps = {
  className: ''
};

export { Footer as default };
