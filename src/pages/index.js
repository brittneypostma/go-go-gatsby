import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pc from "../images/pc.webp"

const textLinks = `text-teal text-shadow hover:shadow-sm hover:text-dark-teal`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="text-center center text-white text-3xl md:text-5xl grid md:flex items-center w-full h-screen relative z-0">
      <img
        src={pc}
        alt="a laptop partially opened"
        className="opacity-50 md:opacity-100 w-full md:w-1/2 h-screen md:h-screen object-cover object-center"
      />
      <div className="absolute md:relative text-shadow grid justify-center p-5 w-full md:w-1/2">
        <h1 className="text-3xl md:text-5xl">Gatsby Developer</h1>
        <p>Wowsers!</p>
        <span>A go-go Gatsby blog.</span>
        <p>
          <Link to="/portfolio" className={textLinks}>
            See my work
          </Link>{" "}
          or{" "}
          <Link to="/contact" className={textLinks}>
            Contact me
          </Link>{" "}
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
