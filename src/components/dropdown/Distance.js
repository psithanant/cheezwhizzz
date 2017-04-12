import React, {Component} from 'react'
import {DropdownButton, MenuItem, ButtonToolbar} from 'react-bootstrap';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {searchDistance} from '../../actions/index.js';
import {SearchZipCode} from '../../actions/index.js'

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        searchDistance,
        SearchZipCode
    }, dispatch)
}

const DistanceDropDown = ({searchDistance, SearchZipCode}) => {
    const onDropdownSelect = (event, result) => {
        searchDistance(event);
    }

    return (
        <DropdownButton bsStyle="large" title="Search By Distance" id="dropdown-basic-1">
            <MenuItem onSelect={onDropdownSelect} eventKey="1">1</MenuItem>
            <MenuItem onSelect={onDropdownSelect} eventKey="2">2</MenuItem>
            <MenuItem onSelect={onDropdownSelect} eventKey="3">3</MenuItem>
            <MenuItem onSelect={onDropdownSelect} eventKey="4">4</MenuItem>
            <MenuItem onSelect={onDropdownSelect} eventKey="5">5</MenuItem>
            <MenuItem onSelect={onDropdownSelect} eventKey="6">6</MenuItem>
            <MenuItem onSelect={onDropdownSelect} eventKey="7">7</MenuItem>
            <MenuItem onSelect={onDropdownSelect} eventKey="8">8</MenuItem>
            <MenuItem onSelect={onDropdownSelect} eventKey="9">9</MenuItem>
            <MenuItem onSelect={onDropdownSelect} eventKey="10">10</MenuItem>
        </DropdownButton>
    );
}

export default connect(null, mapDispatchToProps)(DistanceDropDown);
