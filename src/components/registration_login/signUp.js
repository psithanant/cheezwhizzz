import React, { Component } from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
const RegisterButton = () => (
  <Button bsStyle="link">Register</Button>

);
//
// export default RegisterButton
// const CustomLinkExample = () => (
//   <Router>
//     <div>
//       <registerLink activeOnlyWhenExact={true} to="/" label="Home"/>
//     <registerLink to="/about" label="About"/>
//       <hr/>
//       <Route exact path="/" component={Home}/>
//     <Route path="/register" component={Register}/>
//     </div>
//   </Router>
// )

// const registerLink = ({label, to, activeOnlyWhenExact }) => (
//   <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
//   <div className={match ? 'active' : ''}>
//     {match ? '> ' : ''}<Link to={to}>{label}</Link>
//   </div>
// )}/>
// )

export default RegisterButton
