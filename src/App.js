import React from 'react';
//import logo from './logo.svg';
import logo from './kauser.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My name is kauser Ahmed and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out! yooo
        </a>
      </header>
    </div>
  );
}

export default App;
