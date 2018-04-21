import React from 'react'
import convert from 'htmr'
import styled from 'styled-components'

import { H1, Section, SectionInner } from '../../elements'

const LineCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Block = styled.div`
  p {
    margin: 12px 0;
  }
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
      <H1>
        <LineCtn>
          <span>
            { intro.content.header }
          </span>
          <Line />
        </LineCtn>
      </H1>
      <Block>
        { convert(intro.contents) }
      </Block>
    </SectionInner>
  </Section>
)

export default Introduction
