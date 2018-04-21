import React from 'react'
import { node } from 'prop-types'

import Header from '../header'

const propTypes = {
  children: node,
}

const footer = ''

const Layout = ({ children }) => (
  <main>
    <Header />
    {children}
    <footer>
      { footer }
    </footer>
  </main>
)

Layout.propTypes = propTypes

export default Layout
