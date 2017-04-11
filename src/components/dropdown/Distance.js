import React, { Component} from 'react'
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

// const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];


class DistanceDropDown extends Component {
  render(){
  return (
    <DropdownButton bsStyle="large" title = "Search By Distance"  id="dropdown-basic-1">
      <MenuItem eventKey="1">1</MenuItem>
      <MenuItem eventKey="2">2</MenuItem>
      <MenuItem eventKey="3">3</MenuItem>
      <MenuItem eventKey="4">4</MenuItem>
      <MenuItem eventKey="5">5</MenuItem>
      <MenuItem eventKey="6">6</MenuItem>
      <MenuItem eventKey="7">7</MenuItem>
      <MenuItem eventKey="8">8</MenuItem>
      <MenuItem eventKey="9">9</MenuItem>
      <MenuItem eventKey="10">10</MenuItem>
    </DropdownButton>
    );
  }
}



// const buttonsInstance = (
//   <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
// );

export default DistanceDropDown  ;


// ReactDOM.render(buttonsInstance, mountNode);
