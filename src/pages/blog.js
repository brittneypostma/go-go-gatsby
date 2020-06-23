import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query blog {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            slug
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.frontmatter.slug}>
              <article>
                <h2>{post.frontmatter.title}</h2>
                <span>{post.frontmatter.date}</span>
                <p>{post.excerpt}</p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog
