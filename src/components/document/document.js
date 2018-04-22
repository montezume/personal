import React, { Component } from 'react'

import gtag from '../../modules/gtag'

class Document extends Component {
  render () {
    const {
      Html, Head, Body, children, renderMeta,
    } = this.props

    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>malcolm laing</title>
          <link rel="icon" type="image/png" sizes="32x32" href="https://montezume.github.io/personal/favicon-32x32.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://montezume.github.io/personal/favicon-16x16.ico" />

          <meta property="og:site_name" content="malcolmlaing" />
          <meta property="og:title" content="malcolm laing" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="Malcolm Laing - Berlin based front end developer." />

          <meta property="og:image" content="https://montezume.github.io/personal/logo-256.png" />
          <meta property="og:image:width" content="256" />
          <meta property="og:image:height" content="256" />

          <meta name="twitter:title" content="malcolmlaing" />
          <meta name="twitter:creator" content="@montezume" />

          <meta name="twitter:url" content="https://montezume.github.io/personal" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content="Malcolm Laing - Berlin based front end developer." />

          <script dangerouslySetInnerHTML={{ __html: gtag }} />
          {renderMeta.styleTags}
        </Head>
        <Body>{children}</Body>
      </Html>
    )
  }
}

export default Document
