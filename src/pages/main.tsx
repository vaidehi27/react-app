import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';

export const Main = () => {
  return (<div className="App">
    <header className="App-header">
      <Link to="/react/500">Go To 500 page</Link>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
        </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
    </header>
  </div>)
}