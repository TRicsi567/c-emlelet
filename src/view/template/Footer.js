import React from 'react';
import PropTypes from 'prop-types';
import gitHubLogo from 'assets/images/github-logo.png';
import './Footer.scss';

const Footer = (props) => {
  const { className } = props;
  return (
    <footer className={className}>
      <div className='github-link-wrapper'>
        <a href='https://github.com/TRicsi567/c-emlelet'>
          <img src={gitHubLogo} />
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

Footer.defaultProps = {
  className: ''
};

export { Footer as default };
