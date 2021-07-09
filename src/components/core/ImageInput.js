import React, { useState } from 'react'
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import Title from './Title'
import useImage from '../../hooks/useImage'
import ImagePoPUp from './ImagePopUp'

const ImageInput = ({ imageUri, onChangeImage }) => {
  const { selectImageFromCamera, selectImageFromGallery, requestPermission } = useImage()
  const [isVisible, setIsVisible] = useState(false)

  const handlePress = async type => {
    setIsVisible(false)
    requestPermission()
    if (!imageUri) {
      if (type === 'c') {
        const result = await selectImageFromCamera()
        if (result !== null) {
          onChangeImage(result)
        }
      } else if (type === 'g') {
        const result = await selectImageFromGallery()
        if (result !== null) {
          onChangeImage(result)
        }
      }
    } else
      Alert.alert('Delete', 'Are you sure you want to delete image?', [
        {
          text: 'Yes',
          onPress: () => {
            onChangeImage(null)
          },
        },
        {
          text: 'No',
        },
      ])
  }

  return (
    <View>
      <ImagePoPUp
        showModel={isVisible}
        setShowModel={value => setIsVisible(value)}
        handelPress={value => handlePress(value)}
      />

      <View style={{ flexDirection: 'row' }}>
        {!imageUri && (
          <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
            <View style={styles.container}>
              <Ionicons style={styles.iconStyle} name='images' size={50} color='#D0DBEA' />
              <Title fontWeight={700}>Add Kid Photo</Title>
              <Title fontColor={'#9FA5C0'} fontSize={'12px'}>
                Up to (12 mb)
              </Title>
            </View>
          </TouchableWithoutFeedback>
        )}
        {imageUri && (
          <TouchableWithoutFeedback
            onPress={() => {
              handlePress('non')
            }}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: imageUri }} style={styles.image} />
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 161,
    borderColor: '#d0dbea',
    borderRadius: 16,
    borderStyle: 'dashed',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageContainer: {
    width: 327 / 2,
    height: 161,
    borderColor: '#d0dbea',
    borderRadius: 16,
    borderStyle: 'dashed',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  image: {
    width: 327 / 2,
    height: '100%',
  },
  iconStyle: {
    alignSelf: 'center',
  },
})

export default ImageInput
