import React from 'react';
import PropTypes from 'prop-types';
import CardImage from './CardImage';
import './Card.scss';

const Card = (props) => {
  const { texts, onClick, difficulty } = props;
  const { title, description } = texts;

  return (
    <div className={'card-root'} onClick={onClick}>
      <div className={'card-background'} />
      <div className={'card-wrapper'}>
        <CardImage difficulty={difficulty} />
        <div className={'content-wrapper'}>
          <p className={'content-title'}>{title}</p>
          <p className={'content-description'}>{description}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  texts: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func,
  difficulty: PropTypes.oneOf(['beginner', 'intermediate', 'expert'])
};

Card.defaultProps = {
  onClick: () => {},
  difficulty: 'beginner'
};

export { Card as default };
