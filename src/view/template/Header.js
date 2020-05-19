import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Header.scss';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
  const { className } = props;
  const history = useHistory();

  const loginOnClick = () => {
    history.push('/user/login');
  };

  const registerOnClick = () => {
    history.push('/user/register');
  };

  const logoutOnClick = () => {
    localStorage.setItem('authUser', null);
    history.push('/');
  };

  const renderAuthButtons = () => {
    let authUser = JSON.parse(localStorage.getItem('authUser'));

    if (authUser !== null) {
      return (
        <div className='auth-buttons'>
          <h4>Hi, {authUser.username}</h4>
          <input
            type='button'
            id='logout-button'
            className='lgoutbtn'
            value='Logout'
            onClick={logoutOnClick}
          />
        </div>
      );
    } else {
      return (
        <div className='auth-buttons'>
          <input
            type='button'
            id='login-button'
            className='lgnbtn'
            value='Login'
            onClick={loginOnClick}
          />
          <input
            type='button'
            id='register-button'
            className='regbtn'
            value='Register'
            onClick={registerOnClick}
          />
        </div>
      );
    }
  };

  return (
    <div className='header'>
      <header className={clsx(className, 'header-root')}>
        {renderAuthButtons()}
        <h1>
          <a href='/'>C-emlélet</a>
        </h1>
        <div />
      </header>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};

export { Header as default };
