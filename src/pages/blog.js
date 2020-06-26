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
          excerpt(pruneLength: 280)
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
      <div className="blog">
        <h1>Blog</h1>
        <ul>
          {posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.frontmatter.slug}>
                <article>
                  <h2>
                    {post.frontmatter.title}{" "}
                    <span>{post.frontmatter.date}</span>
                  </h2>

                  <p>{post.excerpt}</p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Blog
