import React from 'react'
import { Helmet } from 'react-helmet'
import { withRouteData } from 'react-static'

import Layout from '../../components/layout/layout'

import { Introduction, Personal, Technology } from './'

export default withRouteData(({
  intro, personal, home, technology,
}) => (
  <Layout>
    <Helmet>
      <title>{home.meta.pageTitle}</title>
      <meta name="description" content={home.meta.pageDescription} />
    </Helmet>
    <Introduction intro={intro} />
    <Technology technology={technology} />
    <Personal personal={personal} />
  </Layout>
))
