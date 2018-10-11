import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import palette from '../styles/palette.js'

import 'normalize.css'
import '../styles/fonts.css'
import '../styles/reset.css'

const LayoutInner = styled.div`
  max-width: 1550px;
  margin: 0 auto;
`

const LayoutOuter = styled.div`
  background: ${palette.background};
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Max Luster is a San Francisco based product designer focused on solving problems for technical audiences',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <LayoutOuter>
          <LayoutInner>{children}</LayoutInner>
        </LayoutOuter>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
