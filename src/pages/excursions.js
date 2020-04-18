import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import StyledMainCover from "../components/StyledMainCover/StyledMainCover"
import Tours from "../components/Tours/Tours/Tours"

const excursions = props => {
  return (
    <Layout>
      <StyledMainCover
        img={props.data.defaultBackground.childImageSharp.fluid}
      />
      <Tours />
    </Layout>
  )
}

export default excursions

export const query = graphql`
  query {
    defaultBackground: file(relativePath: { eq: "hiking.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
