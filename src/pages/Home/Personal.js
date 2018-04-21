import React from 'react'
import convert from 'htmr'
import styled from 'styled-components'

import { Divider, Span } from '../../elements'

import { Subtitle, Title } from '../../elements/typography'

import { Grid, Cell, Container } from '../../elements/grid/image-grid'

import breakpoint from '../../theme/breakpoint'

const Block = styled.div`
  margin-top: 24px;

  p {
    margin: 12px 0;
  }
`

const Img = styled.img`
  max-width: 100%;
  display: block;
`

const Sect = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  padding: 0 40px;

  ${breakpoint('medium', `
    flex-direction: row;

  `)}

`

const Left = styled.div`
  ${breakpoint('medium', `
    width: 500px;
  `)}
`

const ImageSection = styled.div`
${breakpoint('medium', `
  flex: 1;
`)}
`

const Personal = ({ personal }) => (
  <Sect>
    <Left>
      <Subtitle>{personal.content.subtitle}</Subtitle>
      <Title>
        { personal.content.header }
      </Title>
      <Divider />
      <Span size={{ small: '20px', medium: '30px' }}>
        {personal.content.description}
      </Span>
      <Block>
        {convert(personal.contents)}
      </Block>
    </Left>
    <ImageSection>
      <Container>
        <Grid>
          {personal.content.images.map((image, i) => (
            <Cell key={i}>
              <Img
                src={image.src}
                alt={image.description}
                size={image.size}
              />
            </Cell>
          ))
          }
        </Grid>
      </Container>
    </ImageSection>
  </Sect>
)

export default Personal
