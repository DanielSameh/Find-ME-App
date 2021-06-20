import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

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
        <View >
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
    background: ${props => props.bg || '#1FCC79'};
    border: ${props => (props.isTransparent ? '1px solid #D0DBEA' : '0px')};
    border-radius: 32px;
    width: ${props => props.width || '372px'};
    justify-content: center;
    align-items:center;
    padding: 15px 24px;
    margin-top: 16px;
`

const ButtonText = styled.Text`
    font-size: 15px;
    font-weight: 700;
    color: ${props => props.FC || 'white'} ;
`


export default Button