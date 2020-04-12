import React from 'react';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Header.scss';

class Header extends React.Component {
  loginOnClick() {
    createBrowserHistory({ forceRefresh: true }).push('/login');
  }

  registerOnClick() {
    createBrowserHistory({ forceRefresh: true }).push('/register');
  }

  logoutOnClick() {
    localStorage.setItem('authUser', null);
    createBrowserHistory({ forceRefresh: true }).push('/');
  }

  renderAuthButtons() {
    let authUser = JSON.parse(localStorage.getItem('authUser'));
    console.log(authUser);

    if (authUser !== null) {
      return (
        <div className='auth-buttons'>
          <h4>Hi, {authUser.username}</h4>
          <input
            type='button'
            id='logout-button'
            value='Logout'
            onClick={(e) => {
              this.logoutOnClick(e);
            }}
          />
        </div>
      );
    } else {
      return (
        <div className='auth-buttons'>
          <input
            type='button'
            id='login-button'
            value='Login'
            onClick={(e) => {
              this.loginOnClick(e);
            }}
          />
          <input
            type='button'
            id='register-button'
            value='Register'
            onClick={(e) => {
              this.registerOnClick(e);
            }}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div className='header'>
        <div className='header-root-div'>
          <header className={clsx(this.props.className, 'header-root')}>
            <h1>
              <a href='/'>C-emlélet</a>
            </h1>
          </header>
        </div>
        {this.renderAuthButtons()}
      </div>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};

export { Header as default };
