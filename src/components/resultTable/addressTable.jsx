import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './Table.css';

const mapStateToProps = (state, ownProps ) =>{
  console.log('what is list', state);
    return {
      list: state.result
      // page: state.search.page
    }
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ }, dispatch)
// }

const _renderList = (list) => {
  return (
  // {console.log('what is state', state)};
   list.map(item => (
      <tr key={cheese.id}>
        <td>
          {item.Address}
        </td>
        <td>
          {item.author}
        </td>
        <td>
          {item.num_comments}
        </td>
        <td>
          {item.points}
        </td>
      </tr>
    ))
  );
}

class Table extends Component {
  render(){
    {console.log('what is lissttttt',this.props.list);}
  return (
    <table className="table">
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
  );
  }
};

export default connect(mapStateToProps)(Table);
