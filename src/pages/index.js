import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-center center text-white text-5xl">
      <span className="text-shadow">
        <h1 className="text-5xl">Gatsby Developer</h1>
        <p>Wowsers!</p>
        <span>A go-go Gatsby blog.</span>
      </span>
    </div>
  </Layout>
)

export default IndexPage
