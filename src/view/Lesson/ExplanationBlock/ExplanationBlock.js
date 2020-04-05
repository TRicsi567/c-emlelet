import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './ExplanationBlock.scss';

const ExplanationBlock = (props) => {
  const { children, className } = props;

  return (
    <div className={clsx('explanation-block-root', className)}>
      <div className='explanation-block-background' />
      <div className='explanation-block-content-wrapper'>{children}</div>
    </div>
  );
};

ExplanationBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  className: PropTypes.string
};

ExplanationBlock.defaultProps = {
  children: undefined,
  className: ''
};

export { ExplanationBlock as default };
