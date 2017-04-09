import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import buttonGroupInstance from './components/filterButtonGroup'
<<<<<<< HEAD
import navbarInstance from './components/navBar'
import tableInstance from './components/cheese_address'
=======
import { Grid, Col } from 'react-bootstrap';
import Menu from './components/filterButtonGroup'
import NavbarClass from './components/navBar/navBar'
import ResultTable from './components/resultTable'
>>>>>>> 885bb55d73d964a61302b27a1500f24ba69bab9f


const fakeCheeseData = [
  {name: "brie", hardness: "soft", animal: "cow", favorite: 0, id: 1},
];
// const About = () => {
//   return <div>About HackerNews!</div>
// }

class FindStore extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {navbarInstance}
          <h2>Welcome to React</h2>
          {buttonGroupInstance}
          {tableInstance}
        </div>
=======
      <div className="FindStore">
        <p>hiiii</p>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="Home">

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
>>>>>>> 885bb55d73d964a61302b27a1500f24ba69bab9f

class App extends Component {
  ////////// Render
  render() {
    return (
      <Router>
      <div className="page">
      <NavbarClass />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Route exact path="/" component={Home}/>
      <Route path="/about" component={FindStore}/>
      </div>
      </Router>
    );
  }
}


export default App;
