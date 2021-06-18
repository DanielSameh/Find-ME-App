import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Dimensions } from 'react-native';
import Image from './Image'
import { EvilIcons } from '@expo/vector-icons';

import VerticalSpace from './VerticalSpace'
import HorizontalSpace from './HorizontalSpace'
import Typography from '../core/Typography'
import Row from './Row'
import colors from '../styles/colors'
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
    const screenwidth = Dimensions.get('window').width;

    return (
        <TouchableWithoutFeedback onPress={onPress} >
            <View width={screenwidth}>
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
                <Row
                    direction='flex-start'
                >
                    <HorizontalSpace />
                    <Typography
                        fontColor={colors.black}
                        fontWeight='bold'
                        fontSize='18px'
                    >
                        {caseName}
                    </Typography>
                    <HorizontalSpace width='130px' />
                    <Typography
                        fontColor={state == 'Founded' ? 'green' : 'red'}
                        fontWeight='bold'
                        fontSize='16px'
                    >
                        {state}
                    </Typography>
                </Row>
                <VerticalSpace height='10px' />
                <Row direction='flex-start'
                >
                    <HorizontalSpace />
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