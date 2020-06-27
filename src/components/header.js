import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

const links = `hover:text-light-purple transition-colors duration-75 ease-linear ml-5`

const Header = ({ siteTitle }) => (
  <header className="theme bg-black text-white mb-6">
    <div className="max-w-max mx-auto py-5 flex items-center justify-between">
      <h1>
        <Link to="/" className="flex items-center text-3xl font-medium">
          <img src={logo} alt="logo" className="mr-5" />
          {siteTitle}
        </Link>
      </h1>
      <nav className="flex items-center">
        <ul className="flex">
          <li>
            <Link to="/" className={links}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" className={links}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className={links}>
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={links}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" className={links}>
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
