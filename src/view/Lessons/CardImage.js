import React from 'react';
import PropTypes from 'prop-types';
import './CardImage.scss';

const CardImage = (props) => {
  const { difficulty } = props;

  const text = ((_difficulty) => {
    switch (_difficulty) {
      case 'beginner': {
        return 'easy';
      }
      case 'intermediate': {
        return 'medium';
      }
      case 'expert': {
        return 'hard';
      }
      default: {
        return 'easy';
      }
    }
  })(difficulty);

  return (
    <div className={`card-image-${text}`}>
      <span>{text}</span>
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
