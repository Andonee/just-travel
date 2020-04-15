import React from "react"
import Title from "../Title/Title"
import styles from "./about.module.css"
// import image from "../../../images/hiking.jpg"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const getAboutImage = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about image" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Why choose us?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            harum architecto magni expedita saepe?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minus
            nobis enim nam, quae sed mollitia veritatis et?
          </p>
          <button className="btn-primary">read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
