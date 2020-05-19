import React, { useReducer } from 'react';
import axios from 'api';
import Grid from 'view/template/Grid';
import { makeStyles } from '@material-ui/styles';
import './Register.scss';
import { useHistory } from 'react-router';
import Input from './Input';

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
const useStyles = makeStyles({
  input: {
    margin: [[16, 0]]
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const RegisterContent = () => {
  const history = useHistory();

  const classes = useStyles();

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
    <Grid className='register-form-root'>
      <div className='register-form'>
        <div className='input-container'>
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <div className={classes.inputContainer}>
            <Input
              id='username'
              variant='outlined'
              label='Username'
              value={state.username}
              onChange={handleUsernameChange}
              required
              name='username'
              placeholder='Enter Username'
              className={classes.input}
            />

            <Input
              id='email'
              variant='outlined'
              label='Email'
              required
              type='email'
              name='email'
              placeholder='Enter Email'
              value={state.email}
              onChange={handleEmailChange}
              className={classes.input}
            />

            <Input
              id='password'
              variant='outlined'
              label='Password'
              required
              type='password'
              name='psw'
              value={state.password}
              onChange={handlePasswordChange}
              className={classes.input}
            />

            <Input
              id='password-repeat'
              variant='outlined'
              label='Repeat Password'
              required
              type='password'
              name='psw-repeat'
              value={state.passwordRepeat}
              onChange={handlePasswordRepeatChange}
              className={classes.input}
            />
          </div>
          <p>
            By creating an account you agree to our{' '}
            <a href='/'>Terms & Privacy</a>.
          </p>
          <input
            type='button'
            value='Register'
            className='regbtn'
            onClick={handleOnSubmit}
          />
        </div>
      </div>
      <div className='container signin'>
        <p>
          Already have an account? <a href='/user/login'>Sign in</a>.
        </p>
      </div>
    </Grid>
  );
};

export { RegisterContent as default };
