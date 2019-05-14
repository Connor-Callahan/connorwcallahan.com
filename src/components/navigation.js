import React, { Component } from 'react';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import mac from '../images/icon-mac.png'




class Navigation extends Component {

  render() {
    return (
      <header
        className="nav-container"
        style={{
          background: `white`,
          marginBottom: `1.45rem`,
        }}
      >
      <Link
        to="/" className="nav-link">
        <img src={mac}
          className="favicon"
          />
          <span
          className="text"
          >
          Connor Callahan
          </span>
      </Link>
      <div className="link-list">
      <Link
        to="/about/" className="nav-link">
        About</Link>
      <Link
        to="/articles/" className="nav-link">
        Articles</Link>

        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
        </div>
      </header>
    );
  }

}



Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
