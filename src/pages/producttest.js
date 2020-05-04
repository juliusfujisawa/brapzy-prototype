import React from 'react'

import { graphql } from 'gatsby'


export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>Testing graphql page</h1>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Valu 1</th>
            <th>Valu 2</th>
            <th>Valu 3</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.allTestJson.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.Product_id}</td>
              <td>{node.Valu_1}</td>
              <td>{node.Valu_2}</td>
              <td>{node.Valu_3}</td>
              <td>{node.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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


