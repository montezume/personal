import React from 'react'
import convert from 'htmr'
import styled from 'styled-components'

import { H1, P, Section, SectionInner } from '../../elements'

const LineCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Line = styled.span`
  position: relative;
  flex: 1;
  margin: 8px 24px 0 24px;
  flex: 1;
  &:after {
    content: '';
    top: 4px;
    left: 0;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: black;
  }
`

const Introduction = ({ intro }) => (
  <Section>
    <SectionInner>
      <LineCtn>
        <H1>
          { intro.content.header }
        </H1>
        <Line />
      </LineCtn>
      <P>{intro.content.description}</P>
      { convert(intro.contents) }
    </SectionInner>
  </Section>
)

export default Introduction
