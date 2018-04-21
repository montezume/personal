import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import { injectGlobal } from 'styled-components'
import globalStyles from './theme/global-styles'

//
import Routes from 'react-static-routes'

import './app.css'

injectGlobal`
  ${globalStyles}
`

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default hot(module)(App)

/*      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
*/
