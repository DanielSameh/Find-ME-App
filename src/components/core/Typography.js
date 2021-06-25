import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const Typography = ({ isParagrapgh, children, fontSize, fontWeight, fontColor, textAlign, ...props }) => {

  return (
   

    <Text numberOfLines={isParagrapgh ? null : 1} TA={textAlign} color={fontColor} FW={fontWeight} FS={fontSize} style={{ ...props }}>
      {children}
    </Text>
 
  )
}

const Text = styled.Text`
    font-size: ${props => props.FS || '15px'};
    font-weight: ${props => props.FW || 'normal'};
    color: ${props => props.color || colors.fontMain};
    text-align: ${props => props.TA || 'left'};
    `
export default Typography