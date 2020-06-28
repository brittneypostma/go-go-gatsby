import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import logo from "../images/logo.svg"

const links = `font-bold hover:text-dark-purple lg:hover:text-light-teal transition-colors duration-75 ease-linear ml-5`
const menu = `grid h-1 w-10 relative mb-2 bg-light-teal rounded z-10`

const Header = ({ siteTitle }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  // const handleToggle = () => (setNavbarOpen = !setNavbarOpen)
  return (
    <header className="theme text-white mb-6 relative z-10">
      <div className="w-full p-5 flex items-center justify-between">
        <div className="w-1/2">
          <h1>
            <Link to="/" className="flex items-center text-3xl font-medium">
              <img src={logo} alt="logo" className="mr-5" />
              <span className="hidden md:flex">{siteTitle}</span>
            </Link>
          </h1>
        </div>

        <div className="w-1/2 flex justify-end">
          <button
            className="z-10 -mt-3 absolute text-white cursor-pointer text-xl leading-none rounded bg-transparent  block lg:hidden outline-none focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div className="flex items-center justify-end">
              <div>
                <span className={menu}></span>
                <span className="grid h-1 w-8 relative mb-2 bg-light-teal rounded z-10"></span>
                <span className={menu}></span>
              </div>
            </div>
          </button>
          <nav
            className={
              "absolute lg:flex flex-grow items-center" +
              (navbarOpen ? "grid" : " hidden")
            }
          >
            <ul className="grid lg:flex items-center self-center mt-6 bg-light-teal lg:bg-opacity-0 py-5 pr-5 lg:p-0">
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
        {/* <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Share</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Tweet</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                <span className="ml-2">Pin</span>
              </a>
            </li>
          </ul> */}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
