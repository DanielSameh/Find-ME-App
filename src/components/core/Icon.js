import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'


const Icon = ({
    backgroundColor,
    onPress,
    size,
    borderRadius,
    borderWidth,
    bottom,
    marign,
    IconComponent
}) => {
    return (
        <IconView
            activeOpacity={0.5}
            onPress={onPress}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            borderWidth={borderWidth}
            bottom={bottom}
            marign={marign}
            size={size}
        >
            {IconComponent}
        </IconView>
    )
}

export default Icon

const IconView = styled(TouchableOpacity)`

    align-items: center;
    justify-content: center;
    background-color:${props => props.backgroundColor || 'white'};
    height: ${props => props.size || '80px'};
    width: ${props => props.size || '80px'};
    border-radius: ${props => props.borderRadius || '0px'};
    border-color: ${props => props.backgroundColor};
    border-width: ${props => props.borderWidth || '0px'};
    bottom: ${props => props.bottom || '0px'};
    margin: ${props => props.marign || '0px'};
`

