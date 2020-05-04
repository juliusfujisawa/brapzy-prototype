import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export default ({ data }) => {
    console.log(data)
    return (
            <Layout>
                <TableContainer>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Brand</TableCell>
                                <TableCell>Platfrom</TableCell>
                                <TableCell>Core</TableCell>
                                <TableCell>Benchmark</TableCell>
                                <TableCell>Price&nbsp;(Rp)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.allCpuJson.edges.map(({ node }, index) => (
                                <TableRow key={index}>
                                    <TableCell>{node.product_id}</TableCell>
                                    <TableCell>{node.brand}</TableCell>
                                    <TableCell>{node.platform}</TableCell>
                                    <TableCell>{node.core}</TableCell>
                                    <TableCell>{node.benchmark}</TableCell>
                                    <TableCell>{node.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Layout>
    )
}

export const query = graphql`

query {
  allCpuJson {
    edges {
      node {
        price
        product_id
        brand
        platform
        core
        benchmark
      }
    }
  }
}
`