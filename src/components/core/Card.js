import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import styled from 'styled-components';

import VerticalSpace from '../layout/VerticalSpace'
import HorizontalSpace from '../layout/HorizontalSpace'
import Typography from './Typography'
import Row from '../layout/Row'
import colors from '../styles/colors'
import Circle from './Circle';
import Image from './Image'

const Card = ({
    onError,
    onPress,
    uri,
    height = "100%",
    width = "100%",
    borderTopRadius = 0,
    borderBottomRadius = 0,
    caseName,
    state,
    caseLocation
}) => {

    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View width='100%'>
                <Image
                    uri={uri}
                    onError={onError}
                    onPress={onPress}
                    height={height}
                    width={width}
                    borderTopLeftRadius={borderTopRadius}
                    borderTopRightRadius={borderTopRadius}
                    borderBottomLeftRadius={borderBottomRadius}
                    borderBottomRightRadius={borderBottomRadius}
                />
                <VerticalSpace />
                <RowView>
                    <Typography
                        fontColor={colors.black}
                        fontWeight='bold'
                        fontSize='18px'
                    >
                        {caseName}
                    </Typography>
                    <Row direction='flex-start'  >
                        <Circle
                            height='13px'
                            width='13px'
                            borderRadius='6.5px'
                            borderColor={state == 'Founded' ? 'green' : 'red'}
                            borderWidth='4px'
                            bc='white'
                        />
                        <HorizontalSpace width={12} />
                        <Typography
                            fontColor={state == 'Founded' ? 'green' : 'red'}
                            fontWeight='bold'
                            fontSize='16px'
                        >
                            {state}
                        </Typography>
                    </Row>
                </RowView>
                <VerticalSpace height='10px' />
                <Row direction='flex-start'
                >
                    <HorizontalSpace width={10} />
                    <EvilIcons name="location" size={24} color="#9FA5C0" />
                    <Typography
                        fontColor='#9FA5C0'
                        fontWeight='bold'
                        fontSize='16px'
                    >
                        {caseLocation}
                    </Typography>
                </Row>
                <VerticalSpace />
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Card

const RowView = styled(View)`
width: 100%;
padding-left:10;
padding-right:10;
flex-direction : row;
align-self:flex-start;
justify-content: space-between ;
align-items: center;
`