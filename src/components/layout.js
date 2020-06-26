/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-gradient min-h-screen font-poppins">
      <div className="flex-1 min-h-screen">
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className="max-w-max mx-auto p-5">{children}</main>
      </div>
      <footer className="max-w-max mx-auto p-5 text-white flex-shrink-0 flex items-end justify-center ">
        © {new Date().getFullYear()}, Built with&nbsp;
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
