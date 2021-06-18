import React from 'react'
import styled from 'styled-components'

const Row = ({ children, direction }) => {
  return <Horizontal direction={direction}>{children}</Horizontal>
}

const Horizontal = styled.View`

flex-wrap: wrap;
flex-direction : row;
align-self:${props => props.direction || 'center'};
justify-content: space-around ;
align-items: center;
`

export default Row
