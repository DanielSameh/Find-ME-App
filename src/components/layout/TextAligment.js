import React from 'react'
import styled from 'styled-components'

const TextAligment = ({ children, direction }) => {
  return <Aligment direction={direction}>{children}</Aligment>
}

const Aligment = styled.View`
margin-left:${props => (props.direction == 'flex-start' ? '24px' : '0px')}
margin-right:${props => (props.direction == 'flex-end' ? '24px' : '0px')}
align-self:${props => props.direction || 'center'}
`

export default TextAligment
