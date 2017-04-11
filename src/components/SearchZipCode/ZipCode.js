import React, { Component} from 'react'
import { Navbar, FormGroup, FormControl, Button  } from 'react-bootstrap';

class ZipCode extends Component {
  render(){
    return(
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Zip Code</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <FormGroup>
          <FormControl type="text" placeholder="Put a zipcode here" />
        </FormGroup>
        {' '}
        {/* <Button type="submit">Submit</Button> */}
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
)
}
};

// ReactDOM.render(navbarInstance, mountNode);


export default ZipCode
