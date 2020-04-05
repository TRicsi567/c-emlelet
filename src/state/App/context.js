import React, { useContext, createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { initialState, reducer } from './reducer';

const AppContext = createContext();

const useAppContext = () => {
  const res = useContext(AppContext);

  if (!res) {
    throw Error('useAppContext must be used inside an AppProvider');
  }
  return res;
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

AppProvider.defaultProps = {
  childrend: undefined
};

export { AppProvider as default, AppContext, useAppContext };
