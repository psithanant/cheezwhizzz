import React, { Component } from 'react';

import './App.css';
import buttonGroupInstance from './components/filterButtonGroup'
import navbarInstance from './components/navBar/navBar'


class App extends Component {
  render() {
    return (
      <div className="App">

        {navbarInstance}

          <main>

            {buttonGroupInstance}
          </main>


        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;
