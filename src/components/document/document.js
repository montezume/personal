import React, { Component } from 'react'

class Document extends Component {
  render () {
    const {
      Html, Head, Body, children, renderMeta,
    } = this.props

    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {renderMeta.styleTags}
        </Head>
        <Body>{children}</Body>
      </Html>
    )
  }
}

export default Document
