import React from 'react'
import styled from 'styled-components'

const Row = ({ children, direction }) => {
  return <Horizontal direction={direction}>{children}</Horizontal>
}

const Horizontal = styled.View`
flexWrap: wrap
flex-direction : row
align-self:${props => props.direction || 'center'}
justify-content: space-around
`

export default Row
