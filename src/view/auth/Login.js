import React from 'react';
import { createBrowserHistory } from 'history';

class LoginContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  async handleOnSubmit() {
    if (this.state.password === '' || this.state.username === '') return;
    let response = await fetch('http://localhost:3500/users/login/', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3500/',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });
    let res = JSON.parse(await response.json());
    if (res.hasOwnProperty('err')) alert(res.err);
    else {
      localStorage.setItem('authUser', JSON.stringify(res));
      createBrowserHistory({ forceRefresh: true }).push('/');
    }
  }

  render() {
    return (
      <>
        <div className='login-form'>
          <div className='container'>
            <h1>Login</h1>
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
            <hr></hr>

            <input
              type='button'
              value='Sign in'
              onClick={() => this.handleOnSubmit()}
            />
          </div>
        </div>
        <div className='container signup'>
          <p>
            Create an account: <a href='/register'>Sign up</a>.
          </p>
        </div>
      </>
    );
  }
}

export { LoginContent as default };
