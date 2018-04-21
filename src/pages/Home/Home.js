import React from 'react'
import { Helmet } from 'react-helmet'
import { withRouteData } from 'react-static'
// import convert from 'htmr'
// import styled from 'styled-components'

import Layout from '../../components/layout/layout'

import Introduction from './Introduction'
import Personal from './Personal'

// import { H1, P, Section, SectionInner } from '../../elements'

export default withRouteData(({ intro, personal, home }) => {
  console.log('personal', personal)
  return (
    <Layout>
      <Helmet>
        <title>{home.meta.pageTitle}</title>
        <meta name="description" content={home.meta.pageDescription} />
      </Helmet>
      <Introduction intro={intro} />
      <Personal personal={personal} />
    </Layout>
  )
})
