import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = useState({ mark: 1 });

  const { mark } = state;
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <main className='Main'>
        <h1>The gang</h1>
        <ul>
          <li>Supik Csanád Ferenc</li>
          <li>Lakatos Hunor</li>
          <li>Nagy Ákos</li>
          <li>Török Richárd Dávid</li>
        </ul>
        <p>Our mark:</p>
        <div>
          <button
            className='fancy-button'
            onClick={() => {
              setState(({ mark, ...rest }) => ({ ...rest, mark: mark - 1 }));
            }}
          >
            -
          </button>
          <span>{mark}</span>
          <button
            className='fancy-button'
            onClick={() => {
              setState(({ mark, ...rest }) => ({ ...rest, mark: mark + 1 }));
            }}
          >
            +
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
