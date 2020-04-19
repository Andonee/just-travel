import React from "react"
import BlogCard from "../BlogCard/BlogCard"
import Title from "../../HomeComponents/Title/Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../blog.module.css"

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          title
          slug
          contentful_id
          published(formatString: "DD/MM/Y")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)
  console.log(posts.edges)
  return (
    <section className={styles.blog}>
      <Title title="our" subtitle="blogs" />
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.contentful_id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogList
// ...GatsbyContentfulFluid
