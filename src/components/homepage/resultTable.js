import React from 'react';

class ResultTable extends React.Component {

    render() {
        // console.log(this.props)
        let rows = [];
        this.props.cheeses.forEach(function(cheese) {
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
                    <td>
                        <input type="checkbox"/>
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
                        <th>Favorite</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }
}

export default ResultTable;
