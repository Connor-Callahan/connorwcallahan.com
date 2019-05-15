import React from "react"
import { Link } from "gatsby"
import config from "../data/config"
import projects from "../data/projects"
import ProjectListing from "../components/ProjectListing"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `application`, `react`, `javascript`]} />
    <header>
      <div className="summary">
        <h1>Hi, I'm Connor</h1>
          <p>{config.siteDescription}</p>
      </div>
    </header>
    <ProjectListing projects={projects} />
  </Layout>
)

export default IndexPage
