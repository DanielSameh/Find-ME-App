import React from 'react'
import styled from 'styled-components'

const HorizontalSpace = ({ children, width }) => {
  return <Horizontal width={width}>{children}</Horizontal>
}

const Horizontal = styled.View`
  width: ${props => props.width || '16px'};
`

export default HorizontalSpace
