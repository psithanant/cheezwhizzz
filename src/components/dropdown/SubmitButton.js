import React, {Component} from 'react'
import {Thumbnail, Button} from 'react-bootstrap';
import photo from '../../assets/thumbnaildiv.png'
import {doSearch} from '../../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
// import { render } from 'react-dom';
// import Rotation from 'react-rotation';


const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        doSearch: doSearch
    }, dispatch)
}
const mapStateToProps = (state, ownProps) => {
    return {distance: state.combineDistanceZipcode.distance,
      zipcode: state.combineDistanceZipcode.zipcode}
};

const SubmitDistanceRating = ({distance, zipcode, doSearch}) => {
    return (
        <Thumbnail src={photo}>
            <h3>Cheese</h3>
            <p>Do you like cheese?</p>
            <p>
                <Button onClick={(event) => {
                    doSearch(zipcode, distance);
                }} bsStyle="primary">Hit me to search</Button>
            </p>
        </Thumbnail>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SubmitDistanceRating);
