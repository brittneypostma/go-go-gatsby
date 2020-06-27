import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Thanks = () => {
  return (
    <Layout>
      <SEO title="Thank you!" />
      <div className="text-center center text-white">
        <span className="text-shadow">
          <h1 className="text-5xl">Thank You!</h1>
          <span className="text-2xl">
            I appreciate you reaching out. I will contact you back as soon as
            possible!
          </span>
        </span>
      </div>
    </Layout>
  )
}

export default Thanks
