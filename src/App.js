import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Menu from './components/filterButtonGroup'
import navbarInstance from './components/navBar'
import ResultTable from './components/resultTable'


const fakeCheeseData = [
  {name: "brie", hardness: "soft", animal: "cow", favorite: 0, id: 1},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {navbarInstance}
        </div>
        <Grid>
          <Col md={6} >
            <Menu />
          </Col>
          <Col md={6} >
            <ResultTable cheeses={fakeCheeseData} />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
