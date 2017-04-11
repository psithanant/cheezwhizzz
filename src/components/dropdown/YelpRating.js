import React, { Component} from 'react'
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';


class RatingDropDown extends Component {
  render(){
  return (
    <DropdownButton bsStyle="large" title = "Search By Rating"  id="dropdown-basic-1">
      <MenuItem eventKey="5">5</MenuItem>
      <MenuItem eventKey="4.5">4.5</MenuItem>
      <MenuItem eventKey="4">4</MenuItem>
      <MenuItem eventKey="3.5">3.5</MenuItem>
      <MenuItem eventKey="3">3</MenuItem>
      <MenuItem eventKey="2.5">2.5</MenuItem>
      <MenuItem eventKey="2">2</MenuItem>
      <MenuItem eventKey="1.5">1.5</MenuItem>
      <MenuItem eventKey="1">1</MenuItem>
    </DropdownButton>
    );
  }
}


export default RatingDropDown;
