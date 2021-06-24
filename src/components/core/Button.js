import React from 'react'
import { View, StyleSheet } from 'react-native'
import styled from 'styled-components'
import colors from '../styles/colors'

const Button = ({
  onPressIn,
  onPress,
  children,
  backColor,
  fontColor,
  width,
  isTransparent,
  height,
  style,
}) => {
  return (
    <View style={styles.Division}>
      <RoundedTouchableOpacity
        style={style}
        width={width}
        bg={backColor}
        height={height}
        onPress={onPress}
        isTransparent={isTransparent}
        onPressIn={onPressIn}
      >
        <ButtonText FC={fontColor} style={style}>
          {' '}
          {children}
        </ButtonText>
      </RoundedTouchableOpacity>
    </View>
  )
}
const RoundedTouchableOpacity = styled.TouchableOpacity`
    height:${props => props.height || '56px'} ;
    background: ${props => props.bg || colors.greenPrimary}
    border: ${props => (props.isTransparent ? '1px solid #D0DBEA' : '0px')};
    border-radius: 3px;
    width: ${props => props.width || '372px'};
    justify-content: center;
    align-items:center;
    padding: 15px 24px;
    margin-top: 16px;
`
const ButtonText = styled.Text`
    font-size: 17px
    font-weight: 700
    color: ${props => props.FC || 'white'} 
`
const styles = StyleSheet.create({})
export default Button
