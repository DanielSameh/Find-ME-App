import React, { useRef } from 'react'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components'
import ImageInput from './ImageInput'

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef()
  const scrollEnd = () => {
    scrollView.current.scrollToEnd()
  }
  return (
    <View style={{ justifyContent: 'center', height: 161 }}>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={scrollEnd}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Container>
          {imageUris.map((uri) => (
            <ImageView key={uri} >
              <ImageInput
                imageUri={uri}
                key={uri}
                onChangeImage={() => { onRemoveImage(uri) }}
              />
            </ImageView>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </Container>
      </ScrollView>
    </View>
  )
}

const Container = styled(View)`
flex-direction: row;
justify-content: center;
align-items: center;
margin-left: 10px;
margin-right: 10px;
`

const ImageView = styled(View)`
margin-right: 5px;
margin-left: 5px;
`

export default ImageInputList
