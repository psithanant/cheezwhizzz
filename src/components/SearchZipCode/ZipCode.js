import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap';
import {searchDistance} from '../../actions/index.js';
import {SearchZipCode} from '../../actions/index.js'

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log();
    return bindActionCreators({
        searchDistance,
        SearchZipCode
    }, dispatch)
}

const ZipCode = ({SearchZipCode}) => {
    const keyIn = (event) => {
        SearchZipCode(event.target.value);
    }

    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Zip Code</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Navbar.Form pullLeft>
                    <FormGroup>
                        <FormControl onChange={keyIn} type="text" placeholder="Put a zipcode here"/>
                    </FormGroup>
                    {' '}
                    {/* <Button type="submit">Submit</Button> */}
                </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    )

};

export default connect(null, mapDispatchToProps)(ZipCode);
