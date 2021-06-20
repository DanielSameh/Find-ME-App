import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components'


const Icon = ({
  backgroundColor,
  onPress,
  size,
  borderRadius,
  borderWidth,
  bottom,
  marign,
  iconColor,
  iconSize = 40,
  iconName
}) => {
  return (
    <IconView
      activeOpacity={1}
      onPress={onPress}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      borderWidth={borderWidth}
      bottom={bottom}
      marign={marign}
      size={size}
    >
      <MaterialCommunityIcons
        name={iconName}
        size={iconSize}
        color={iconColor}
      />
    </IconView>
  )
}

export default Icon

const IconView = styled(TouchableOpacity)`

    align-items: center;
    justify-content: center;
    background-color:${props => props.backgroundColor};
    height: ${props => props.size || '80px'};
    width: ${props => props.size || '80px'};
    border-radius: ${props => props.borderRadius || '40px'};
    border-color: ${props => props.backgroundColor};
    border-width: ${props => props.borderWidth || '10px'};
    bottom: ${props => props.bottom || '40px'};
    margin: ${props => props.marign || '0px'};
`

