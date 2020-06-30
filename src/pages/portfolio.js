import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import robofriends from "../images/robofriends.png"
import shop from "../images/sticker-shop.png"
import SiteCard from "../components/site-card"

const Portfolio = ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div>
        <h1>Portfolio</h1>
        <div className="container mx-auto my-6 flex flex-wrap justify-center">
          <SiteCard
            src={robofriends}
            name="Robofriends"
            desc="A searchable listing of all your friendly robots!"
            url="https://brittneypostma.github.io/robofriends-hooks-rtk/"
          />
          <SiteCard
            src={shop}
            name="Sticker Shop"
            desc="A site to buy stickers!"
            url="https://serverless-sticker-shop.netlify.app/"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
