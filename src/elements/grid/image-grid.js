import styled from 'styled-components'

import breakpoint from '../../theme/breakpoint'

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0;
`

export const Cell = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;

  width: calc(50% - 1rem);

  &:nth-child(1n) {
    justify-content: flex-end;
    margin-bottom: 0;
  }

  &:nth-child(2n) {
    justify-content: flex-end;
  }

  &:nth-child(3n), &:nth-child(4n) {
    justify-content: flex-start;
  }

  ${breakpoint('large', `
    margin-right: 0;
    width: calc(50% - 1rem);
  `)}

`
