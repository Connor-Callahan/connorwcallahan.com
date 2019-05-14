import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `application`, `react`, `javascript`]} />
    <h1>Hi, I'm Connor</h1>
      <p>I am a Full Stack Web Developer experienced in HTML/CSS, Rails, Javascipt and React/Redux. I love to building things and helping people.</p>
  </Layout>
)

export default IndexPage
