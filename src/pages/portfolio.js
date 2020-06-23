import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles/portfolio.css"

const Portfolio = ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="cards">
          <div className="card">
            <a
              href="https://brittneypostma.github.io/robofriends-hooks-rtk/"
              target="_blank"
              rel="noopener noreffer"
            >
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="Robofriends Site"
                className="site"
              />
              <article className="card-text">
                <h2>Robofriends</h2>
                <p>A searchable listing of all your friendly robofriends!</p>
              </article>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio

export const query = graphql`
  query Image {
    file(relativePath: { eq: "robofriends.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
