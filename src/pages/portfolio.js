import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import robofriends from "../images/robofriends.png"
import shop from "../images/sticker-shop.png"
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
              <img src={robofriends} alt="Robofriends Site" className="site" />
              <div className="site-content">
                <h2 className="site-title">Robofriends</h2>
                <p className="site-desc">
                  A searchable listing of all your friendly robots!
                </p>
              </div>
            </a>
          </div>
          <div className="card">
            <a
              href="https://brittneypostma.github.io/robofriends-hooks-rtk/"
              target="_blank"
              rel="noopener noreffer"
            >
              <div className="site-content">
                <img src={shop} alt="Sticker Shop" className="site" />
                <h2 className="site-title">Sticker Shop</h2>
                <p className="site-desc">A site to buy stickers!</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
