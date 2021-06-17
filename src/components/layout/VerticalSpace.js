import React from 'react'
import styled from 'styled-components'

const VerticalSpace = ({ children, height, backColor }) => {
  return (
    <Vertical height={height} backColor={backColor}>
      {children}
    </Vertical>
  )
}

const Vertical = styled.View`
height:${props => props.height || '16px'}
width: 100%
background:${props => props.backColor || 'transparent'}
`

export default VerticalSpace
