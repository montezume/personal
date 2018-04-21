import React from 'react'
import convert from 'htmr'
import styled from 'styled-components'

const Img = styled.img`
  max-width: 100%;
`

import { H1, P, Section, SectionInner } from '../../elements'

const Personal = ({ personal }) => {
  console.log(personal);
  return (
  <Section>
    <SectionInner>

        <H1>
          { personal.content.header }
        </H1>
      <P>{personal.content.description}</P>
      { convert(personal.contents) }
    </SectionInner>

    {personal.content.images.map((image, i) => (
      <Img
        key={i}
        src={image.src}
        alt={image.description}
      />
    ))
    }
  </Section>
)
}

export default Personal
