import React, { useReducer } from 'react';
import { useHistory } from 'react-router';
import axios from 'api';
import Input from './Input';
import './Login.scss';
import { makeStyles } from '@material-ui/styles';

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
const useStyles = makeStyles({
  root: {
    margin: [[24, 0]],
    '& *': {
      color: 'white'
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: 'white'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
      borderWidth: '1.5px'
    }
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const LoginContent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const history = useHistory();
  const classes = useStyles();

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
      if (!data.hasOwnProperty("err")) {
        localStorage.setItem('authUser', data);
        history.push('/');
      }
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

          <Input
            placeholder='Enter Username'
            name='username'
            label='Username'
            variant='outlined'
            required
            className={classes.root}
            value={state.username}
            onChange={handleUsernameChange}
          />

          <Input
            type='password'
            placeholder='Enter Password'
            name='psw'
            label='Password'
            variant='outlined'
            required
            className={classes.root}
            value={state.password}
            onChange={handlePasswordChange}
          />
          <hr></hr>

          <input
            type='button'
            value='Sign in'
            className='lgnbtn'
            onClick={handleOnSubmit}
          />
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
