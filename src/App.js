import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import buttonGroupInstance from './components/filterButtonGroup'
import navbarInstance from './components/navBar'
import tableInstance from './components/cheese_address'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {navbarInstance}
          <h2>Welcome to React</h2>
          {buttonGroupInstance}
          {tableInstance}
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;
