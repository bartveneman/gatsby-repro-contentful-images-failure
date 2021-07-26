import React from 'react'
import { graphql } from 'gatsby'

const Home = () => (<h1>Repro</h1>)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          htmlAst
        }
      }
    }
  }
`

export default Home