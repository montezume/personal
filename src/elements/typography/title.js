import styled from 'styled-components'
import font from '../../theme/font'
import color from '../../theme/color'
import breakpoint from '../../theme/breakpoint'

const Title = styled.h2`
  color: ${color.black};
  font-weight: ${font.light};
  font-size: 52px;
  letter-spacing: 2px;
  text-transform: uppercase;
  ${breakpoint('small', `
    font-size: 80px;
  `)}
`

export default Title
