import React from 'react';

import Layout from '../components/layout';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const SimpleTable = () => (

  <Layout>
    <TableContainer style={{ padding: "0 30px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Value 1</TableCell>
            <TableCell>Value 2&nbsp;(g)</TableCell>
            <TableCell>Value 3&nbsp;(g)</TableCell>
            <TableCell>Price&nbsp;(Rp)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Name 1</TableCell>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
            <TableCell>4</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Layout>
);


export default SimpleTable