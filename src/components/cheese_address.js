import React from 'react';
import {Table } from 'react-bootstrap';

const tableInstance = (
  <Table striped bordered condensed hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Address</th>
        <th>Distance</th>
        <th>Phone</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cheese Plus</td>
        <td>2001 Polk Street</td>
        <td>2 Miles</td>
        <td>415921-2188<td>
        <td>4 Stars<td>
      </tr>
    </tbody>
  </Table>
);

​
export default tableInstance;
