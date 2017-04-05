import React, { Component } from 'react';

import './App.css';
import buttonGroupInstance from './components/filterButtonGroup'
import NavbarClass from './components/navBar/navBar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarClass />
          <main>
            {buttonGroupInstance}
          </main>

      </div>
    );
  }
}

export default App;
