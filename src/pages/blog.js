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
            image
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

      <div>
        <h1>Welcome to My Blog</h1>
        <ul className="container mx-auto my-6 flex flex-wrap justify-center">
          {posts.map(({ node: post }) => (
            <li
              key={post.id}
              className="flex justify-center max-w-full mb-10 mx-10"
            >
              <div className="bg-white w-100 overflow-hidden flex flex-col flex-grow flex-shrink shadow-lg hover:shadow-2xl">
                <Link
                  to={post.frontmatter.slug}
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src={post.frontmatter.image}
                    alt={post.frontmatter.name}
                    className="h-64 w-full pb-6 object-center object-cover"
                  />
                  <article>
                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                      {post.frontmatter.date}
                    </p>
                    <h2 className="w-full font-bold text-xl text-gray-900 px-6 flex">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-gray-800 font-serif text-base px-6 mb-5">
                      {post.excerpt}
                    </p>
                  </article>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Blog
