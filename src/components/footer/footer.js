import React from 'react'
import styled from 'styled-components'

import color from '../../theme/color'

import breakpoint from '../../theme/breakpoint'

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 24px;
  padding-left: 16px;
  width: 100%;
  height: 40px;
  background-color: ${color.blue}

  ${breakpoint('medium', `
    padding-left: 40px;
  `)}

`

const A = styled.a`
  margin-left: auto;
  height: 16px;
  width: 16px;
  margin-right: 16px;

  ${breakpoint('medium', `
    margin-right: 40px;
  `)}
`

const GithubLogo = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-size: contain;
    background-image: url('logos/GitHub-Mark-32px.png');
  }
`

const Footer = () => (
  <StyledFooter>
    &copy; Malcolm Laing 2018
    <A href="https://github.com/montezume/personal" target="_BLANK">
      <GithubLogo />
    </A>
  </StyledFooter>
)

export default Footer
