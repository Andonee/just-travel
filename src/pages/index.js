import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"

export default () => (
  <Layout>
    Hello world!
    <Link to="/">Home</Link>
    <Link to="/excursions/">Excursions</Link>
    <Link to="/blog/">Blog</Link>
    <Link to="/contact/">Contact</Link>
  </Layout>
)
