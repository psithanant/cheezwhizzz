import React, {Component} from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    return (
      <Navbar.Form pullLeft className="search-bar">
        <FormGroup>
        <FormControl
          type="text"
          placeholder="Enter Cheese Name"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
        </FormGroup>
      </Navbar.Form>
  )
  }

  onInputChange(term) {
    this.setState({term});
    // this.props.onSearchTermChange(term);
    }

}


export default SearchBar;
