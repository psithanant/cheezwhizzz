import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Table } from 'react-bootstrap';
// import './Table.css';
import { bindActionCreators} from 'redux'
import { doSearch } from '../../actions'

const mapStateToProps = (state, ownProps ) =>{
  console.log('what is list', state);
    return {
      list: state.distance_reducer
      // page: state.search.page
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({doSearch}, dispatch)
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ }, dispatch)
// }

const _renderList = (list) => {
  console.log('what is item,', list);
  return (

  // {console.log('what is state', state)};
   list.map(item => (
      <tr key={item.id}>
        <td>
          {item.name}
        </td>
        <td>
          {item.location.display_address[0]}
        </td>
        <td>
          {item.geo_accuracy}
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
    console.log('what is lissttttt',this.props.list);
    return (
      <div>
        <button onClick={(event)=>{ doSearch(94588, 3) }}
          type ="button"> Click here </button>
      <table className="table-striped table-bordered">
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
          {console.log("what is renderlist?",_renderList(this.props.list))}
          {_renderList(this.props.list)}
        </tbody>
      </table>
    </div>
      );
  }
};

export default connect(mapStateToProps)(DistanceTable);
