import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Header.scss';

const Header = (props) => {
  const { className } = props;
  return (
    <header className={clsx(className, 'header-root')}>
      <h1>C-emlélet</h1>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};

export { Header as default };
