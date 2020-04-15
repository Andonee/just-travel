import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import StyledMainCover from "../components/StyledMainCover/StyledMainCover"
import Baner from "../components/Baner/Baner"
import About from "../components/HomeComponents/About/About"
import Services from "../components/HomeComponents/Services/Services"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <StyledMainCover
      home="true"
      img={data.defaultBackground.childImageSharp.fluid}
    >
      <Baner
        title="Hit the road"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum autem nisi adipisci!"
      >
        <Link to="/excursions" className="btn-white">
          Choose your
        </Link>
      </Baner>
    </StyledMainCover>

    <About />
    <Services />
  </Layout>
)

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
