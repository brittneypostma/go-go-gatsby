import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <div className="mb-12 shadow-2xl bg-white max-w-max mx-auto font-sans font-medium p-8 sm:mt-0 lg:mt-6">
        <h1 className="mb-4 text-4xl text-black">{mdx.frontmatter.title}</h1>
        <hr />
        <p className="text-lg font-light py-2">
          Posted on {mdx.frontmatter.date}
        </p>
        <hr />
        <div className="max-w-max mx-auto h-full bg-white w-full mt-4 text-xl md:text-2xl text-black leading-normal">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`
