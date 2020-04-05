import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Header.scss';

const Header = (props) => {
  const { className } = props;
  return (
    <header className={clsx(className, 'header-root')}>
      <a href='/'>
        <h1>C-emlélet</h1>
      </a>
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
