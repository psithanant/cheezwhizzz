import React, {Component} from 'react';

import buttonGroupInstance from './components/filterButtonGroup'
import NavbarClass from './components/navBar/navBar'

import { Grid, Col } from 'react-bootstrap';

import './App.css';
import Menu from './components/filterButtonGroup'

import ResultTable from './components/resultTable'


const fakeCheeseData = [
  {name: "brie", hardness: "soft", animal: "cow", favorite: 0, id: 1},
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarClass />

        {/* <div className="App-header">
        </div> */}
        <main>
          {buttonGroupInstance}
        </main>
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
