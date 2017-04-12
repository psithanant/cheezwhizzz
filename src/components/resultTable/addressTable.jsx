import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Table } from 'react-bootstrap';
// import './Table.css';
import { bindActionCreators} from 'redux'
import { doSearch } from '../../actions'

const mapStateToProps = (state, ownProps ) =>{
    return {
      list: state.distance_reducer,
      distance: state.combineDistanceZipcode.distance
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({doSearch}, dispatch)
}

const _renderList = (list,distance) => {

  return (
   list.map(item => (
      <tr key={item.id}>
        <td>
          {item.name}
        </td>
        <td>
          {item.location.display_address[0] + ', ' + item.location.display_address[1] }
        </td>
        <td>
          {distance}
        </td>
        <td>
          {item.phone}
        </td>
        <td>
          {item.rating}
        </td>
      </tr>
    ))
  );
}
class DistanceTable extends Component {

  render(){
    return (
      <div>
        {/* <button onClick={(event)=>{ this.props.doSearch(94588, 3) }}
          type ="button"> Click here </button> */}
      <table id='DistanceTable'className="table-striped table-bordered table">
        <thead>
          <tr>
            <th> Name </th>
            <th> Address </th>
            <th> Distance </th>
            <th> Phone </th>
            <th> Rating </th>
          </tr>
        </thead>
        <tbody>
          {_renderList(this.props.list, this.props.distance)}
        </tbody>
      </table>
    </div>
      );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DistanceTable);
