import React, { useReducer } from 'react';
import axios from 'api';
import './Register.scss';
import { useHistory } from 'react-router';

const actions = {
  SET_USERNAME: 'SET_USERNAME',
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_PASSWORD_REPEAT: 'SET_PASSWORD_REPEAT'
};

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordRepeat: '',
  redirectToLogin: false
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.SET_USERNAME:
      return { ...state, username: payload };
    case actions.SET_EMAIL:
      return { ...state, email: payload };
    case actions.SET_PASSWORD:
      return { ...state, password: payload };
    case actions.SET_PASSWORD_REPEAT:
      return { ...state, passwordRepeat: payload };
    default:
      return state;
  }
};

const RegisterContent = () => {
  const history = useHistory();

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUsernameChange = (event) => {
    dispatch({ type: actions.SET_USERNAME, payload: event.target.value });
  };

  const handleEmailChange = (event) => {
    dispatch({ type: actions.SET_EMAIL, payload: event.target.value });
  };

  const handlePasswordChange = (event) => {
    dispatch({ type: actions.SET_PASSWORD, payload: event.target.value });
  };

  const handlePasswordRepeatChange = (event) => {
    dispatch({
      type: actions.SET_PASSWORD_REPEAT,
      payload: event.target.value
    });
  };

  const handleOnSubmit = async () => {
    if (state.password !== state.passwordRepeat) return;
    try {
      const { status } = await axios.post('/users/register', {
        username: state.username,
        email: state.email,
        password: state.password
      });
      console.log(status);
      history.push('/user/login');
    } catch (error) {
      console.error(error);
    }
  };

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
            value={state.username}
            onChange={handleUsernameChange}
          />

          <label htmlFor='email'>
            <b>Email</b>
          </label>
          <input
            type='email'
            placeholder='Enter Email'
            name='email'
            required
            value={state.email}
            onChange={handleEmailChange}
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

          <label htmlFor='psw-repeat'>
            <b>Repeat Password</b>
          </label>
          <input
            type='password'
            placeholder='Repeat Password'
            name='psw-repeat'
            required
            value={state.passwordRepeat}
            onChange={handlePasswordRepeatChange}
          />
          <hr></hr>

          <p>
            By creating an account you agree to our{' '}
            <a href='/'>Terms & Privacy</a>.
          </p>
          <input type='button' value='Register' onClick={handleOnSubmit} />
        </div>
      </div>
      <div className='container signin'>
        <p>
          Already have an account? <a href='/user/login'>Sign in</a>.
        </p>
      </div>
    </>
  );
};

export { RegisterContent as default };
