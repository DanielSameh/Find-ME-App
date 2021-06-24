import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import styled from 'styled-components'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


import Input from '../components/core/Input'
import Title from '../components/core/Title'
import Container from '../components/layout/ContainerView'
import CustomDatePicker from '../components/core/CustomDatePicker'
import Row from '../components/layout/Row'
import VerticalSpace from '../components/layout/VerticalSpace'
import HorizontalSpace from '../components/layout/HorizontalSpace'
import Button from '../components/core/Button'
import routes from '../navigation/routes'
import AppButtomSheet from '../components/core/ButtomSheet'

const AddCaseScreen = ({ navigation }) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false)
  const [date, setDate] = useState('"01-01-2021"')
  return (
    <View>
      <AppButtomSheet
        isVisible={bottomSheetVisible}
        onClosed={() => setBottomSheetVisible(false)}
        galleryOnPress={() => selectImageFromGallery()}
        cameraOnPress={() => selectImageFromCamera()}
      />
      <ScrollView>
        <Container bc='white'>
          <VerticalSpace />
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <TouchableOpacity onPress={() => navigation.navigate(routes.HOME)}>
              <Title fontWeight={'700'} fontColor={'#FF6464'}>
                                Cancel
              </Title>
            </TouchableOpacity>
          </Row>
          <VerticalSpace />
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Upload Photo</Title>
          </Row>
          <AddCaseView onPress={() => { setBottomSheetVisible(true) }}>
            <Ionicons style={Styles.iconStyle} name='images' size={50} color='#D0DBEA' />
            <Title fontWeight={700}>Add Kid Photo</Title>
            <Title fontColor={'#9FA5C0'} fontSize={'12px'}>
                            Up to (12 mb)
            </Title>
          </AddCaseView>

          <VerticalSpace />
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Location Lost Case</Title>
          </Row>
          <Input inputPlaceHolder={'Enter location here'}>
            <EvilIcons name="location" size={24} color="#9FA5C0" />
          </Input>
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Description</Title>
          </Row>
          <Input
            isDescription
            Height={'150px'}
            inputPlaceHolder={'Tell me what happened and the details'}
          ></Input>
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Case Age</Title>
          </Row>
          <Input
            inputPlaceHolder={'Age'}
            keyboardType='numeric'
          ></Input>
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Date of Loss</Title>
          </Row>
          <CustomDatePicker date={date} onDateChange={(date) => {
            setDate(date)
          }} />
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Phone Number</Title>
          </Row>
          <Input keyboardType='phone-pad'
            inputPlaceHolder={'Enter phone No. contact with'}></Input>
          <Button>Next</Button>
        </Container>
        <VerticalSpace height={40} />
      </ScrollView>
    </View>

  )
}

const Styles = StyleSheet.create({

  iconStyle: {
    alignSelf: 'center',
  },
})

const AddCaseView = styled.TouchableOpacity`
            width: 327px;
            height: 161px;
            border: 2px dashed #d0dbea;
            border-radius: 16px;
            justify-content: center;
            `

export default AddCaseScreen
