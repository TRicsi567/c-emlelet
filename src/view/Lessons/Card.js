import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = (props) => {
  const { image, texts, onClick } = props;
  const { src, alt } = image;
  const { title, description } = texts;

  return (
    <div className={'card-root'} onClick={onClick}>
      <div className={'card-background'} />
      <div className={'card-wrapper'}>
        <div className={'image-wrapper'}>
          <img src={src} alt={alt} />
        </div>
        <div className={'content-wrapper'}>
          <p className={'content-title'}>{title}</p>
          <p className={'content-description'}>{description}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }).isRequired,
  texts: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func
};

Card.defaultProps = {
  onClick: () => {}
};

export { Card as default };
