import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './Header.scss';

class Header extends React.Component {
  loginOnClick() {
    const history = useHistory();
    history.push('/login');
  }

  registerOnClick() {
    const history = useHistory();
    history.push('/register');
  }

  logoutOnClick() {
    localStorage.setItem('authUser', null);
    const history = useHistory();
    history.push('/');
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
            className='lgnbtn'
            id='login-button'
            value='Login'
            onClick={(e) => {
              this.loginOnClick(e);
            }}
          />
          <input
            type='button'
            className='regbtn'
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
            {this.renderAuthButtons()}
          </header>
        </div>
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
