import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const Circle = ({ height, width, borderRadius, bc, borderWidth, borderColor }) => {
    return (
        <OuterView height={height}
            width={width}
            borderRadius={borderRadius}
            bc={bc}
            borderWidth={borderWidth}
            borderColor={borderColor}
        >
        </OuterView>
    )
}

export default Circle

const OuterView = styled(View)`
height: ${props => props.height};
width: ${props => props.width};
border-radius: ${props => props.borderRadius};
background-color:${props => props.bc};
border-width:${props => props.borderWidth};
border-color: ${props => props.borderColor};
`

