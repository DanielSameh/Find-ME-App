import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { RadioButton } from 'react-native-paper'

import colors from '../components/styles/colors'
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
import useNetInfo from '../hooks/useNetInfo'
import useImageConvert from '../hooks/useImageConvert'

const phoneRegExp = /^01[0-2]{1}[0-9]{8}$/

const uploadSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  phone: yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
  age: yup.number('must be number').required('must be number'),
})

const AddCaseScreen = ({ navigation }) => {
  const netInfo = useNetInfo()
  const [imageUris, setImageUris] = useState([])
  const [date, setDate] = useState(new Date())
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [checked, setChecked] = React.useState('man')

  const [show, setShow] = useState(false)
  const uploadCaseApi = useApi(casesApi.uploadCase)
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(uploadSchema) })

  const onSubmit = async info => {
    setError(false)
    if (imageUris.length === 0) {
      alert('Please upload image')
      return
    }
    const imageConvert = useImageConvert(imageUris)
    info.images = await imageConvert.getImagesUri()
    info.gender = checked
    info.lostDate = date.toJSON()
    info.coordinates = [-73.856077, 32.848447]
    info.age = Number(info.age)
    console.log(info)

    if (netInfo.isConnected) {
      await uploadCaseApi
        .request(info)
        .then(() => navigation.navigate(routes.HOME))
        .catch(e => {
          setError(true)
          if (e.toString().includes('400')) {
            setMessage('please enter all information')
          } else {
            setMessage('something is wrong try again')
          }
        })
    } else {
      alert('Plaese Check Internet')
      return
    }
  }

  return (
    <View>
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
            onAddImage={uri => {
              setImageUris([...imageUris, uri])
            }}
            onRemoveImage={uri => {
              setImageUris(imageUris.filter(imageUri => imageUri !== uri))
            }}
          />
          <VerticalSpace />
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Location Lost Case</Title>
          </Row>

          <Input inputPlaceHolder={'Enter location here'}>
            <EvilIcons name='location' size={24} color='#9FA5C0' />
          </Input>

          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Case name</Title>
          </Row>
          <Controller
            shouldUnregister={register('name')}
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
          />
          {errors.name && <Text style={styles.warningText}>{errors.name.message}</Text>}
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Description</Title>
          </Row>
          <Controller
            shouldUnregister={register('description')}
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
          {errors.description && (
            <Text style={styles.warningText}>{errors.description.message}</Text>
          )}
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Case Age</Title>
          </Row>
          <Controller
            shouldUnregister={register('age')}
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                inputPlaceHolder={'Age'}
                keyboardType='numeric'
                onTermChange={value => onChange(value)}
                term={value}
              ></Input>
            )}
            name='age'
            defaultValue=''
          />
          {errors.age && <Text style={styles.warningText}>enter valid number </Text>}
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>gender</Title>
          </Row>
          <Row>
            <Text>man</Text>
            <RadioButton
              value='man'
              status={checked === 'man' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('man')}
            />
            <RadioButton
              value='woman'
              status={checked === 'woman' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('woman')}
            />
            <Text>woman</Text>
          </Row>

          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Date of Loss</Title>
          </Row>

          <Button onPress={() => setShow(true)} fontColor='gray' backColor='white'>
            {date.toDateString()}
          </Button>
          <CustomDatePicker
            date={date}
            show={show}
            onChange={(e, newdate) => {
              setShow(false)
              const currentDate = newdate || date
              setDate(currentDate)
            }}
          />
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Phone Number</Title>
          </Row>
          <Controller
            control={control}
            name='phone'
            shouldUnregister={register('phone')}
            render={({ field: { onChange, value } }) => (
              <Input
                keyboardType='phone-pad'
                inputPlaceHolder={'Enter phone No. contact with'}
                onTermChange={value => onChange(value)}
                term={value}
              />
            )}
          />
          {errors.phone && <Text style={styles.warningText}>{errors.phone.message}</Text>}
          {error ? (
            <View>
              <VerticalSpace height={40} />
              <Text style={styles.warningText}>{message}</Text>
            </View>
          ) : null}
          <Button onPress={handleSubmit(onSubmit)}>Next</Button>
        </Container>
        <VerticalSpace height={40} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  warningText: {
    alignSelf: 'flex-end',
    marginRight: 30,
    color: colors.watermelonColor,
  },
})
export default AddCaseScreen
