import React from "react"
import Tour from "../../Tours/Tour"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Title from "../Title/Title"
import styles from "./featuredTours.module.css"

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          days
          contentful_id
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const res = useStaticQuery(getTours)
  const tours = res.featuredTours.edges

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
      <AniLink fade to="./excursions" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
