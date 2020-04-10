import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './FancyButton.scss';

const FancyButton = (props) => {
  const { children, onClick, className, disabled } = props;
  return (
    <button
      className={clsx(
        'fancy-button-root',
        disabled && 'fancy-button-disabled',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

FancyButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool
};
FancyButton.defaultProps = {
  children: undefined,
  onClick: () => {},
  className: '',
  disabled: false
};

export { FancyButton as default };
