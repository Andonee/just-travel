import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import StyledMainCover from "../components/StyledMainCover/StyledMainCover"

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledMainCover img={data.blog.childImageSharp.fluid} />
    </Layout>
  )
}

export default blog

export const query = graphql`
  query {
    blog: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
