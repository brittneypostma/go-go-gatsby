import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <h1>Gatsby Developer</h1>
      <p>Wowsers!</p>
      <span>A go-go Gatsby blog.</span>
    </div>
  </Layout>
)

export default IndexPage
