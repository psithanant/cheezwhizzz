import React from 'react';

const ResultTable = ({cheeses}) => (
    <table className='table-striped table-bordered table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Firmness</th>
                <th>Animal</th>
                <th>Favorite</th>
            </tr>
        </thead>
        <tbody>
        {cheeses.map((cheese) => (
          <tr key={cheese.id}>
              <td>{cheese.name}</td>
              <td>{cheese.firmness}</td>
              <td>{cheese.animal}</td>
              <td><input type="checkbox"/></td>
          </tr>
        ))}
        </tbody>
    </table>
)

export default ResultTable;
