import React from "react"
import Layout from "../components/Layout/Layout"
import styles from "../pages-css/error.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Baner from "../components/Baner/Baner"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Baner title="you chose poorly">
          <AniLink fade to="/" className="btn-white">
            Back to home page
          </AniLink>
        </Baner>
      </header>
    </Layout>
  )
}

export default error
