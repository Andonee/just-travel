import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import StyledMainCover from "../components/StyledMainCover/StyledMainCover"

const contact = ({ data }) => {
  return (
    <Layout>
      <StyledMainCover img={data.contact.childImageSharp.fluid} />
    </Layout>
  )
}

export default contact

export const query = graphql`
  query {
    contact: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
