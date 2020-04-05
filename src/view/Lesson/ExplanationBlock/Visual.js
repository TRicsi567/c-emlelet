import React from 'react';
import PropTypes from 'prop-types';

const VisualExplanation = (props) => {
  const { slideNum, images } = props;
  return (
    <div>
      <img src={images[slideNum]} alt={`slide-${slideNum}`} />
    </div>
  );
};

VisualExplanation.propTypes = {
  slideNum: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string)
};

VisualExplanation.defaultProps = {
  slideNum: 0,
  images: []
};

export { VisualExplanation as default };
