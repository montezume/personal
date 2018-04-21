import React from 'react'
import styled from 'styled-components'
import convert from 'htmr'

import { Divider, Span } from '../../elements'

// import { Section, SectionInner } from '../../elements'

import { Subtitle, Title } from '../../elements/typography'

import breakpoint from '../../theme/breakpoint'

const Image = styled.div`
  background-image: url('${props => props.image}');
  background-size: cover;
  height: 450px;
  ${breakpoint('medium', `
    margin-top: 18px;
  `)}
`

const TechStackList = styled.div`
  // styling markdown is not so fun -_-
  dt {
    margin: 8px 0;
  }
  dd {
    margin-top: 8px;
    margin-left: 0;
  }
`

const Grid = styled.section`
  display: flex;
  min-height: 450px;
  padding: 50px 40px;
  margin: 6px 0;
  flex-direction: column;


  ${breakpoint('medium', `
    flex-direction: row-reverse;
    margin: 20px auto;
    max-width: 1200px;

    padding: 0;
    // more stuff
  `)}

`

const Column = styled.div`
  width: 100%;

  ${props => props.left && `
    ${breakpoint('medium', `
      padding-left: 40px;


    `)}
  `}


  ${breakpoint('medium', `
    width: 50%;


  `)}
`

const Technology = ({ technology }) => (
  <Grid>
    <Column left>
      <Title>
      Javascript
      </Title>
      <Subtitle>
        {technology.content.header}
      </Subtitle>
      <Divider />
      <TechStackList>
      { convert(technology.contents) }
      </TechStackList>
    </Column>
    <Column>
      <Image image={technology.content.image.src} />
    </Column>
  </Grid>
)

export default Technology
