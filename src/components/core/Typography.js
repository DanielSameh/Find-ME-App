import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'



const Typography = ({
  text,
  fontColor ,
  fontSize,
  fontWeight,
  ...props}) => {
  return (
    <Text
      fontSize={fontSize}
      color={fontColor}
      fw={fontWeight}
      style={{ ...props }}
    >
      {text}
    </Text>
  )
}

export default Typography


const Text = styled.Text`
  font-size: ${props =>props.fontSize||'15'}px;
  font-weight: ${props => props.fw || '800'};
  color: ${props => props.color || colors.fontMain};
  text-align: center
  
`