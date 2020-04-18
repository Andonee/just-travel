import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import MainCover from "../components/StyledMainCover/StyledMainCover"
import styles from "./template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import Day from "../components/SingleTour/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const tourTemplate = ({ data }) => {
  const {
    name,
    price,
    country,
    days,
    description: { description },
    images,
    start,
    journey,
  } = data.tour

  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <MainCover img={mainImage.fluid} />
      <section className={styles.template}></section>
      <div className={styles.center}>
        <div className={styles.images}>
          {tourImages.map((item, idx) => {
            return (
              <Img
                key={idx}
                fluid={item.fluid}
                alt="single tour"
                className={styles.image}
              />
            )
          })}
        </div>
        <h2>{name}</h2>
        <div className={styles.info}>
          <p>
            <FaMoneyBillWave className={styles.icon} />
            starting from ${price}
          </p>
          <p>
            <FaMap className={styles.icon} />
            {country}
          </p>
        </div>
        <h4>starts on: {start}</h4>
        <h4>duration: {days}</h4>
        <p className={styles.desc}>{description} days</p>
        <h2>daily schedule</h2>
        <div className={styles.journey}>
          {journey.map((item, idx) => {
            return <Day key={idx} day={item.day} info={item.info} />
          })}
        </div>
        <AniLink fade to="/excursions" className="btn-primary">
          back to tours
        </AniLink>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default tourTemplate
