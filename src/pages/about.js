import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./styles/about.css"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="about">
      <h1>About Me</h1>
      <h2>
        Hi! I'm <span>Gatsby Developer</span> and I'm a freelance web developer.
      </h2>
      <p>I love building sites in React and GatsbyJS.</p>
      <p>
        <Link to="/portfolio" class="about-links">
          See my work
        </Link>{" "}
        or{" "}
        <Link to="/contact" class="about-links">
          Contact me
        </Link>{" "}
        today.
      </p>
    </div>
  </Layout>
)

export default About
