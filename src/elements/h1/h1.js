import styled from 'styled-components'

import breakpoint from '../../theme/breakpoint'

const StyledH1 = styled.h1`
  font-size: 40px

  ${breakpoint('small', `
    font-size: 40px;
  `)}

  ${breakpoint('medium', `
    font-size: 50px;
  `)}
`

export default StyledH1
