import React from 'react'
import Link from 'gatsby-link'
import { graphql, StaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

import './Layout.css'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Exam Resources</title>
          </Helmet>

          <header className="masthead">
            <Link className="home-link" to={`/`}>
              <h3>{data.site.siteMetadata.title}</h3>
            </Link>
          </header>

          {children}
        </div>
      </React.Fragment>
    )}
  />
)

export default TemplateWrapper
