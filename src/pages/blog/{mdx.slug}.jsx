import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }) => {
  return (
    <div>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      body
    }
  }
`

export default BlogPost