import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Thanks = () => {
  return (
    <Layout>
      <SEO title="Thank you!" />
      <div className="thanks">
        <h1>Thank You!</h1>
        <span>
          I appreciate you reaching out and I will contact you back as soon as
          possible.
        </span>
      </div>
    </Layout>
  )
}

export default Thanks
