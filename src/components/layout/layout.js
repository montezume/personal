import React from 'react'
import { node } from 'prop-types'

import Header from '../header'
import Footer from '../footer'

const propTypes = {
  children: node,
}

const Layout = ({ children }) => (
  <main>
    <Header />
    {children}
    <Footer />
  </main>
)

Layout.propTypes = propTypes

export default Layout
