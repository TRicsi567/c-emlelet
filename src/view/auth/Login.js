import React, { useReducer } from 'react';
import { useHistory } from 'react-router';
import axios from 'api';

const actions = {
  SET_USERNAME: 'SET_USERNAME',
  SET_PASSOWRD: 'SET_PASSOWRD'
};

const initialState = {
  username: '',
  password: ''
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_USERNAME:
      return { ...state, username: payload };
    case actions.SET_PASSOWRD:
      return { ...state, password: payload };
    default:
      return state;
  }
};

const LoginContent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const history = useHistory();

  const handleUsernameChange = (event) => {
    dispatch({ type: actions.SET_USERNAME, payload: event.target.value });
  };

  const handlePasswordChange = (event) => {
    dispatch({ type: actions.SET_PASSOWRD, payload: event.target.value });
  };

  const handleOnSubmit = async () => {
    if (state.password === '' || state.username === '') {
      return;
    }

    try {
      const { data } = await axios.post('/users/login', {
        username: state.username,
        password: state.password
      });
      localStorage.setItem('authUser', data);
      history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

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
            value={state.username}
            onChange={handleUsernameChange}
          />

          <label htmlFor='psw'>
            <b>Password</b>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='psw'
            required
            value={state.password}
            onChange={handlePasswordChange}
          />
          <hr></hr>

          <input type='button' value='Sign in' onClick={handleOnSubmit} />
        </div>
      </div>
      <div className='container signup'>
        <p>
          Create an account: <a href='/user/register'>Sign up</a>.
        </p>
      </div>
    </>
  );
};

export { LoginContent as default };
