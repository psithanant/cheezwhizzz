import React, {Component} from 'react';
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setNavQuery, setCheeseResult } from '../../actions'



const mapStateToProps = (state, ownProps) => {
  return {
    value: state.navQuery
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({setNavQuery, setCheeseResult}, dispatch)
}

class SearchBar extends Component {

  render() {
    return (
      <Navbar.Form pullLeft className="search-bar">
        <FormGroup>
        <FormControl
          type="text"
          placeholder="Enter Cheese Name"
          // value={}
          onChange={(event) => {
        this.props.setNavQuery(event.target.value);
      }}
           />
         <Button onClick={(event) => {
           event.preventDefault();
           this.props.setCheeseResult(this.props.value)}} >Submit</Button>
        </FormGroup>
      </Navbar.Form>
  )
  }
}
// onChange={(event) => setQuery }
// onSubmit={(event) => }

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
// export default SearchBar;
