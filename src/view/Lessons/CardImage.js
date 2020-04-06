import React from 'react';
import PropTypes from 'prop-types';
import './CardImage.scss';

const CardImage = (props) => {
  const { difficulty } = props;

  const text = ((_difficulty) => {
    switch (_difficulty) {
      case 'beginner': {
        return ['easy', 'kezdő'];
      }
      case 'intermediate': {
        return ['medium', 'haladó'];
      }
      case 'expert': {
        return ['hard', 'nehéz'];
      }
      default: {
        return ['easy', 'kezdő'];
      }
    }
  })(difficulty);

  return (
    <div className={`card-image-${text[0]}`}>
      <span>{text[1]}</span>
    </div>
  );
};

CardImage.propTypes = {
  difficulty: PropTypes.oneOf(['beginner', 'intermediate', 'expert'])
};
CardImage.defaultProps = {
  difficulty: 'beginner'
};

export { CardImage as default };
