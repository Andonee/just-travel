import React from "react"
import styles from "./blog-card.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "gatsby-image"

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog
  console.log("BlogCard", image["0"].fluid)
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image
          fluid={image["0"].fluid}
          className={styles.img}
          alt="single post"
        />
        <AniLink fade className={styles.link} to={`/blog/${slug}`}>
          read more
        </AniLink>
        <h6 className={styles.date}>{published}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  )
}
export default BlogCard
