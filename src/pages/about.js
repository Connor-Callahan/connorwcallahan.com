import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div>
    <div className="about">
      <div className="profile">
        <h1>About Me</h1>
          <p>I'm a Full Stack Developer living in Brooklyn, NY. I am all about learning new things, skills, hobbies, etc. and love jumping in headfirst. I created this website to share projects, blogs and my passion for learning code with others.</p>
          <p>I am a tinkerer at heart and for as long as I can remember I always loved taking things apart just to see how they were put together (and occasionally I might successfully put them back together). </p>
      </div>
      <img className="profile-pic" src={require('../images/profile.jpeg')} />
    </div >
    </div>
  </Layout>
)

export default AboutPage
