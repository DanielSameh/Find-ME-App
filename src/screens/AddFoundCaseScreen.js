import React, { useState } from 'react'
import {
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { RadioButton } from 'react-native-paper'

import colors from '../components/styles/colors'
import MapScreen from '../components/core/MapScreen'
import Input from '../components/core/Input'
import Title from '../components/core/Title'
import Container from '../components/layout/ContainerView'
import Row from '../components/layout/Row'
import VerticalSpace from '../components/layout/VerticalSpace'
import HorizontalSpace from '../components/layout/HorizontalSpace'
import Button from '../components/core/Button'
import ImageInputList from '../components/core/ImageInputList'
import useApi from '../hooks/useApi'
import foundCasesApi from '../api/foundCase'
import useNetInfo from '../hooks/useNetInfo'
import useImageConvert from '../hooks/useImageConvert'

const phoneRegExp = /^01[0-2]{1}[0-9]{8}$/

const uploadSchema = yup.object().shape({
  description: yup.string().required(),
  uploaderPhone: yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
})

const AddFoundCaseScreen = ({ navigation }) => {
  const [locationStore, setLocationStore] = useState(null)
  const [coordinate, setCoordinate] = useState({
    latitude: 0,
    longitude: 0,
  })
  console.log(coordinate.latitude, coordinate.longitude)
  const [modalVisible, setModalVisible] = useState(false)
  const netInfo = useNetInfo()
  const [imageUris, setImageUris] = useState([])
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [checked, setChecked] = React.useState('male')
  const uploadFoundCaseApi = useApi(foundCasesApi.uploadFoundCase)
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

    console.log(locationStore)
    info.images = await imageConvert.getFoundImagesUri()

    info.gender = checked
    info.coordinates = [coordinate.latitude, coordinate.longitude]
    info.city = locationStore[0].city.toLowerCase() || 'cairo'

    console.log(info)

    if (netInfo.isConnected) {
      console.log('upload 1')
      await uploadFoundCaseApi
        .request(info)
        .then(() => navigation.pop())
        .catch(e => {
          console.error('error1', e)
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
            <TouchableOpacity onPress={() => navigation.pop()}>
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
            <Title fontWeight={'700'}>Location Found Case</Title>
          </Row>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible)
            }}
          >
            <Input
              isDisable
              inputPlaceHolder={` ${
                locationStore ? locationStore[0].region : 'Enter location here'
              }`}
            >
              <EvilIcons name='location' size={24} color='#9FA5C0' />
            </Input>
          </TouchableOpacity>
          <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible)
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <MapScreen
                  liveLocation={locationStore}
                  onChangeLocation={location => setLocationStore(location)}
                  modalVisible={modalVisible}
                  onModalChange={visible => setModalVisible(visible)}
                  onCoordinateChange={coord => setCoordinate(coord)}
                />
              </View>
            </View>
          </Modal>
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
            <Title fontWeight={'700'}>gender</Title>
          </Row>
          <Row>
            <Text>male</Text>
            <RadioButton
              value='male'
              status={checked === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('male')}
            />
            <RadioButton
              value='female'
              status={checked === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('female')}
            />
            <Text>female</Text>
          </Row>
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Phone Number</Title>
          </Row>
          <Controller
            control={control}
            name='uploaderPhone'
            shouldUnregister={register('uploaderPhone')}
            render={({ field: { onChange, value } }) => (
              <Input
                keyboardType='phone-pad'
                inputPlaceHolder={'Enter phone No. contact with'}
                onTermChange={value => onChange(value)}
                term={value}
              />
            )}
          />
          {errors.uploaderPhone && (
            <Text style={styles.warningText}>{errors.uploaderPhone.message}</Text>
          )}
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default AddFoundCaseScreen
