import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    height: 80,
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    padding: 0,
    margin: 0,
    marginBottom: 4
  },
  input: {
    fontFamily: 'Roboto, Arial',
    fontSize: 16,
    color: 'white',
    background: 'transparent',
    boxSizing: 'border-box',
    height: '100%',
    padding: [[4, 8]],
    border: [['white', 'solid', 2]],
    borderRadius: 3,
    '&:active': {
      border: [['white', 'solid', 2]]
    },
    '&:focus': {
      border: [['white', 'solid', 2], '!important']
    },
    '&::placeholder': {
      color: '#e8e8e8'
    }
  }
});

const Input = (props) => {
  const {
    className,
    label,
    type,
    onChange,
    value,
    name,
    placeholder,
    id
  } = props;
  const classes = useStyles();
  return (
    <div className={clsx(className, classes.root)}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={classes.input}
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string
};

Input.defaultProps = {
  onChange: () => {},
  id: 0
};

export { Input as default };
