import React from 'react'
import styled from 'styled-components'

const Row = ({ children, direction, ...props }) => {
  return <Horizontal style={{...props}} direction={direction}>{children}</Horizontal>
}

const Horizontal = styled.View`
flex-wrap: wrap;
flex-direction : row;
align-self:${props => props.direction || 'center'};
align-items: center;
`

export default Row