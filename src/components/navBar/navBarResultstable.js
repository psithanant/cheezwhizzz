import React, { Component } from 'react';
import { connect } from 'react-redux'


const mapStateToProps = (state, ownProps) => {
  return {
    list: state.navResult
  }
}

class NavTable extends Component {

    render() {
        let rows = [];
         this.props.list.forEach(function(cheese) {
            rows.push(
                <tr key={cheese.id}>
                    <td>
                        {cheese.name}
                    </td>
                    <td>
                        {cheese.firmness}
                    </td>
                    <td>
                        {cheese.animal}
                    </td>
                </tr>
            )
        });
        return (
            <table className='table-striped table-bordered table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Firmness</th>
                        <th>Animal</th>
                    </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
            </table>
        )
    }
}


export default connect(mapStateToProps)(NavTable)
