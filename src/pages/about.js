import Layout from "../components/layout"
import SEO from "../components/seo"
import about from "../data/about"

import React, { Component } from 'react';

class AboutPage extends Component {

  render() {
    return (
      <Layout>
        <SEO title="About" />
        <div>
        <div className="about">
          <div className="profile">
            <h1>About Me</h1>
              <p>{about.p1}</p>
              <p>{about.p2}</p>
          </div>
          <img className="profile-pic" alt="me" src={about.image} />
        </div >
        </div>
      </Layout>
    );
  }

}

export default AboutPage
