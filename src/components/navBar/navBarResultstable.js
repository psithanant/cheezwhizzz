import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import React, { Component } from 'react';
import { connect } from 'react-redux'


const mapStateToProps = (state, ownProps) => {
  return {
    list: state.navResult
  }
}

// const data = [];
// class NavTable extends Component {
//   render() {
//     console.log('this is list', this.props.list);
//     return (
//       <BootstrapTable data={ this.props.list }>
//         <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
//         <TableHeaderColumn dataField='animal' isKey>Animal</TableHeaderColumn>
//         <TableHeaderColumn dataField='firmness'>Firmness</TableHeaderColumn>
//       </BootstrapTable>
//     );
//   }
// }

// export default NavTable;


class NavTable extends Component {

    render() {
      // console.log('ok', this.props.list)
        let rows = [];
        console.log('this is propsssss', this.props.list);
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
                  {console.log("this is props", this.props.list)}
                  {this.props.list.map(cheese => (
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
                  )}
                </tbody>
            </table>
        )
    }
}

// const _renderList = list => (
//   list
//     .map(cheese => (
//       <tr key={cheese.id}>
//         <td>
//           {cheese.name}
//         </td>
//         <td>
//           {cheese.firmness}
//         </td>
//         <td>
//           {cheese.animal}
//         </td>
//       </tr>
//     ))
// );
//
// const NavTable = ({ list, page }) => {
//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th>Name</th>
//         <th>Firmness</th>
//         <th>Animal</th>
//         </tr>
//       </thead>
//       <tbody>
//         {console.log('this is list', list)}
//
//         {_renderList(list)}
//       </tbody>
//     </table>
//   );
// };


export default connect(mapStateToProps)(NavTable)
