import React from 'react'
import { node } from 'prop-types'

const propTypes = {
  children: node,
}

const footer = ''

const Layout = ({ children }) => (
  <main>
    {children}
    <footer>
      { footer }
    </footer>
  </main>
)

Layout.propTypes = propTypes

export default Layout
