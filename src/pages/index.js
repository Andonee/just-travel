import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout/Layout"
import MainCover from "../components/MainCover/MainCover"
import Baner from "../components/Baner/Baner"

export default () => (
  <Layout>
    <MainCover>
      <Baner
        title="Hit the road"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum autem nisi adipisci!"
      >
        <Link to="/excursions" className="btn-white">
          Choose your
        </Link>
      </Baner>
    </MainCover>
  </Layout>
)
