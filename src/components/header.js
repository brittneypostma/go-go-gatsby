import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"
import "./styles/header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-wrapper">
      <h1 className="title">
        <Link to="/">
          <img src={logo} alt="logo" />
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="header-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className="header-links">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="header-links">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="header-links">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className="header-links">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
