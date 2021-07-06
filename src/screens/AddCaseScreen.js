import React, { useState } from 'react'
import { View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useForm, Controller } from 'react-hook-form'

import Input from '../components/core/Input'
import Title from '../components/core/Title'
import Container from '../components/layout/ContainerView'
import CustomDatePicker from '../components/core/CustomDatePicker'
import Row from '../components/layout/Row'
import VerticalSpace from '../components/layout/VerticalSpace'
import HorizontalSpace from '../components/layout/HorizontalSpace'
import Button from '../components/core/Button'
import routes from '../navigation/routes'
import ImageInputList from '../components/core/ImageInputList'
import useApi from '../hooks/useApi'
import casesApi from '../api/cases'


const AddCaseScreen = ({ navigation }) => {
  const [imageUris, setImageUris] = useState([])
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const uploadCaseApi = useApi(casesApi.uploadCase)
  const { handleSubmit, control, formState: { errors } } = useForm()

  const onSubmit = async (info) => {

    info.images = ['https://i.picsum.photos/id/1014/200/300.jpg?hmac=nxBnyyuXuAKEA6yVxBtNN4YjpjaciQXA3KwTRICTlWU']
    info.lostDate = date.toJSON()
    info.coordinates = [
      -73.856077,
      32.848447
    ]
    info.age = Number(info.age)
    console.log(info)

    const result = await uploadCaseApi.request(info)

    console.log(result)
    navigation.navigate(routes.HOME)

  }
  console.log(uploadCaseApi.loading)

  return (

    <View>
      {uploadCaseApi.loading ? <View></View> : null}
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

          <ImageInputList
            imageUris={imageUris}
            onAddImage={(uri) => {
              setImageUris(
                [...imageUris, uri]
              )
            }}
            onRemoveImage={(uri) => {
              setImageUris(
                imageUris.filter((imageUri) => imageUri !== uri)
              )
            }}
          />
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
            <Title fontWeight={'700'}>Case name</Title>
          </Row>
          <Controller
            control={control}
            name='name'
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                inputPlaceHolder={'case name'}
                onTermChange={value => onChange(value)}
                term={value}
              />
            )}
          /><Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Description</Title>
          </Row>
          <Controller
            control={control}
            name='description'
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                isDescription
                Height={'150px'}
                inputPlaceHolder={'Tell me what happened and the details'}
                onTermChange={value => onChange(value)}
                term={value}
              />
            )}
          />
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Case Age</Title>
          </Row>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                inputPlaceHolder={'Age'}
                keyboardType='numeric'
                onTermChange={value => onChange(value)} term={value}
              ></Input>
            )}
            name='age'
            defaultValue=''
          />
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Date of Loss</Title>
          </Row>

          <Button onPress={() => setShow(true)} fontColor='gray' backColor='white' >
            {date.toDateString()}
          </Button>
          <CustomDatePicker date={date} show={show}
            onChange={(e, newdate) => {
              const currentDate = newdate || date
              setDate(currentDate)
              setShow(false)
            }} />
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Phone Number</Title>
          </Row>
          <Controller
            control={control}
            name='phone'
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (

              <Input keyboardType='phone-pad'
                inputPlaceHolder={'Enter phone No. contact with'}
                onTermChange={value => onChange(value)}
                term={value}
              />
            )}
          />

          <Button onPress={handleSubmit(onSubmit)} >Next</Button>
        </Container>
        <VerticalSpace height={40} />
      </ScrollView>
    </View>

  )
}
export default AddCaseScreen
