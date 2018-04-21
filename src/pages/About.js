
import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ about }) => {
  console.log('about', about)
  return (
    <div>
      {convert(about.contents)}
    </div>
)
})
