
import React from 'react'
import styled from 'styled-components'
import colors from '../styles/colors'

const Typography = ({ isParagrapgh, children, fontSize, fontWeight, fontColor, textAlign, ...props }) => {

  return (
    <Container style={{ ...props }}>

      <Text numberOfLines={isParagrapgh ? null : 1} TA={textAlign} FC={fontColor} FW={fontWeight} FS={fontSize}>
        {children}
      </Text>
    </Container>
  )
}

const Container = styled.View`

`
const Text = styled.Text`
    font-size: ${props => props.FS || '15px'};
    font-weight: ${props => props.FW || 'normal'};
    color: ${props => props.FC || colors.white};
    text-align: ${props => props.TA || 'left'};
    `
export default Typography
