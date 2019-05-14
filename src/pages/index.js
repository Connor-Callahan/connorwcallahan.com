import React from "react"
import { Link } from "gatsby"
import config from "../data/config"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `application`, `react`, `javascript`]} />
    <h1>Hi, I'm Connor</h1>
      <p>{config.siteDescription}</p>
  </Layout>
)

export default IndexPage
