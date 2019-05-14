import React, { Component } from 'react';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import mac from '../images/icon-mac.png'


class Navigation extends Component {

  render() {

    const { navLinks } = this.props.navLinks

    return (
      <nav>
        <div className="nav-container">
          <div className="icon">
          <Link to="/">
              <img src={mac} className="favicon" /> <span className="text">Connor Callahan</span>
            </Link>
          </div>
          <div className="nav-links">
              {navLinks.map(link => (
                <Link key={link.name} to={link.link} className="link" activeClassName="active">
                  {link.name}
                </Link>
              ))}
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Connor-Callahan">
                GitHub
              </a>
            </div>
          </div>
      </nav>
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
