import React from 'react'

import { graphql } from 'gatsby'
import numeral from 'numeral'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/layout'
import Table from '../components/Table'

const useStyles = makeStyles(theme => ({
  table: {
    // hide 5th column on screen size: medium and smaller
    [theme.breakpoints.down('md')]: {
      '& th:nth-child(5), td:nth-child(5)': {
        display: 'none',
      },
    },
  },
}))

const columns = [
  { title: 'Product Name', field: 'Product_id' },
  { title: 'Value 1', field: 'Valu_1', type: 'numeric' },
  { title: 'Value 2', field: 'Valu_2', type: 'numeric' },
  { title: 'Value 3', field: 'Valu_3', type: 'numeric' },
  {
    title: 'Price (Rp)',
    field: 'Price',
    type: 'numeric',
    render: ({ price }) => <>{numeral(price).format('0,0[.]00')}</>, // format currency
  },
]

export default ({ data }) => {
  const classes = useStyles()
  const _data = data.allTestJson.edges.map(({ node }) => node)
  return (
    <Layout>
      <Table
        className={classes.table}
        title="CPU"
        columns={columns}
        data={_data}
        options={{
          pageSize: 10,
          //   paging: false // Disable pagination
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query {
    allTestJson {
      edges {
        node {
          Price
          Product_id
          Valu_1
          Valu_2
          Valu_3
        }
      }
    }
  }
`
