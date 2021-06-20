import React from 'react'
import styled from 'styled-components'

const HorizontalSpace = ({ width }) => {
  return <Horizontal width={width}/>
}

const Horizontal = styled.View`
  width: ${props => props.width || '16px'};
`

export default HorizontalSpace
