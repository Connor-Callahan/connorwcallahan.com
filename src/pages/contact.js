import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`developer`, `application`, `react`, `javascript`]} />
    <div className="contact-container">
      <div className="contact" >
        <h1>Contact</h1>
          <div className="info">
            <ul>
              <p>Email: connorwcallahan@gmail.com</p>
              <p>Github: <a target="_blank" href="https://github.com/Connor-Callahan">Connor-Callahan</a></p>
              <p>LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/cwcallahan/">cwcallahan</a></p>
              <p>Medium: <a target="_blank" href="https://github.com/Connor-Callahan">connorwcallahan</a></p>
            </ul>
            <img className="me-icon" src={require('../images/me-icon.png')} />
          </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
