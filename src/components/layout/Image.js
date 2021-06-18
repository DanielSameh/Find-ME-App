import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

const CustomImage = ({
    uri,
    onError,
    onPress,
    borderTopRightRadius = '0px',
    borderTopLeftRadius = '0px',
    borderBottomRightRadius = '0px',
    borderBottomLeftRadius = '0px',
    height,
    width
}) => {
    return (
        <TouchableOpacity style={[styles.continer,
        {
            height,
            width,
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,

        }]}
            activeOpacity={1}
            onPress={onPress}>
            <Image
                style={[styles.image, {
                    borderTopLeftRadius,
                    borderTopRightRadius,
                    borderBottomLeftRadius,
                    borderBottomRightRadius,
                }]}
                onError={onError}
                source={{ uri }}
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    continer: {
        height: '100%',
        width: '100%',
    },
    image: {
        height: '100%',
        width: '100%',
    },
})

export default CustomImage

