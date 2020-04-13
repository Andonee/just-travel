import React from "react"
import Layout from "../components/Layout/Layout"
import styles from "../pages-css/error.module.css"
import { Link } from "gatsby"
import Baner from "../components/Baner/Baner"

const error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Baner title="you chose poorly">
          <Link to="/" className="btn-white">
            Back to home page
          </Link>
        </Baner>
      </header>
    </Layout>
  )
}

export default error
