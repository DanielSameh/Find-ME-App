import React from 'react'
import styled from 'styled-components'

const Row = ({ children, direction,justifyContent }) => {
  
  return (
    <Horizontal direction={direction} justifyContent={justifyContent}>
      {children}
    </Horizontal>
  )}

const Horizontal = styled.View`
flex-wrap: wrap;
flex-direction : row;
align-self:${props => props.direction || 'center'};
width: 100%
justify-content: ${props => props.justifyContent || 'center'};

`

export default Row

