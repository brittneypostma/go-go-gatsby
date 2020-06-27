import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="mb-6">
      <h1>About Me</h1>
      <img
        src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80"
        alt="laptop on desk"
        className="h-125 mx-auto mt-6 object-cover object-center"
      />
      <div className="text-center text-white text-3xl mx-20">
        <h2>
          Hi, I'm <span>Gatsby Developer</span>
          <br /> and I'm a freelance web developer.
        </h2>
        <p>I love building sites in React and GatsbyJS.</p>
        <p>
          <Link to="/portfolio" className="text-teal">
            See my work
          </Link>{" "}
          or{" "}
          <Link to="/contact" className="text-teal">
            Contact me
          </Link>{" "}
          today.
        </p>
      </div>
    </div>
  </Layout>
)

export default About
