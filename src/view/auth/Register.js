import React from 'react';
import './Register.scss';
import { createBrowserHistory } from 'history';

class RegisterContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordRepeat: '',
      redirectToLogin: false
    };
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handlePasswordRepeatChange(e) {
    this.setState({ passwordRepeat: e.target.value });
  }

  async handleOnSubmit() {
    if (this.state.password !== this.state.passwordRepeat) return;
    let response = await fetch('http://localhost:3500/users/register/', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3500/',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
    });
    if (JSON.parse(await response.json())) {
      createBrowserHistory({ forceRefresh: true }).push('/login');
    } else {
      // TODO handle failed register.
    }
  }

  render() {
    return (
      <>
        <div className='register-form'>
          <div className='container'>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>

            <label htmlFor='username'>
              <b>Username</b>
            </label>
            <input
              type='text'
              placeholder='Enter Username'
              name='username'
              required
              onChange={(e) => this.handleUsernameChange(e)}
            />

            <label htmlFor='email'>
              <b>Email</b>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              required
              onChange={(e) => this.handleEmailChange(e)}
            />

            <label htmlFor='psw'>
              <b>Password</b>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
              onChange={(e) => this.handlePasswordChange(e)}
            />

            <label htmlFor='psw-repeat'>
              <b>Repeat Password</b>
            </label>
            <input
              type='password'
              placeholder='Repeat Password'
              name='psw-repeat'
              required
              onChange={(e) => this.handlePasswordRepeatChange(e)}
            />
            <hr></hr>

            <p>
              By creating an account you agree to our{' '}
              <a href='/'>Terms & Privacy</a>.
            </p>
            <input
              type='button'
              value='Register'
              onClick={(e) => this.handleOnSubmit(e)}
            />
          </div>
        </div>
        <div className='container signin'>
          <p>
            Already have an account? <a href='/login'>Sign in</a>.
          </p>
        </div>
      </>
    );
  }
}

export { RegisterContent as default };
