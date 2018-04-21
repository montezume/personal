import React from 'react'
import styled from 'styled-components'

import color from '../../theme/color'

const StyledHeader = styled.nav`
  background-color: ${color.blue};
  height: 16px;
  width: 100%;
  padding: 5px 10px;
`

const Square = styled.span`
  position: relative;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    top: 0;
    content: '';
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:after {
    position: absolute;
    content: '';
    background-color: #add1ec;
    width: 70%;
    height: 85%;
    border-radius: 50%;
  }
`

const Header = () => (
  <StyledHeader>
    <Square />
  </StyledHeader>
)


export default Header
