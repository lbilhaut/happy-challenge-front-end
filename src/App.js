import React from 'react';
import logo from './images/Logo-whiteBG-small.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>Connect with your friends & make your life better</h1>
        <p>~App in development~
        </p>
        <a
          className="App-link"
          href="https://happychallenge.fun/"
          target="_blank"
          rel="noopener noreferrer"
        >Learn more about the Happy Challenge Project!</a>
      </header>
    </div>
  );
}

export default App;
