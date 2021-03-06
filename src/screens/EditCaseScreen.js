import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { RadioButton } from 'react-native-paper'

import MapScreen from '../components/core/MapScreen'
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

const EditCaseScreen = ({ route, navigation }) => {
  const caseDetails = route.params
  const [locationStore, setLocationStore] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [coordinate, setCoordinate] = useState({
    latitude: caseDetails.location.coordinates[0],
    longitude: caseDetails.location.coordinates[1],
  })
  console.log(coordinate)
  const editSchema = yup.object().shape({
    name: yup.string().required().default(caseDetails.name),
    description: yup.string().required().default(caseDetails.description),
    phone: yup
      .string()
      .required()
      .matches(phoneRegExp, 'Phone number is not valid')
      .default(caseDetails.phone),
    age: yup.number().required('must be number').default(caseDetails.age),
  })
  const netInfo = useNetInfo()
  const [imageUris, setImageUris] = useState(caseDetails.images)
  const [date, setDate] = useState(new Date(caseDetails.lostDate))
  const [show, setShow] = useState(false)
  const editCaseApi = useApi(casesApi.editCase)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [checked, setChecked] = React.useState('man')
  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(editSchema) })

  const onSubmit = async info => {
    if (imageUris.length === 0) {
      alert('Please upload image')
      return
    }
    const imageConvert = useImageConvert(imageUris)
    info.images = await imageConvert.getImagesUri()
    info.lostDate = date.toJSON()
    info.gender = checked
    info.coordinates = [coordinate.latitude, coordinate.longitude]
    info.age = Number(info.age)
    info._id = caseDetails._id
    info.city = locationStore[0].city.toLowerCase() || 'cairo'

    if (netInfo.isConnected) {
      await editCaseApi
        .request(info)
        .then(() => {
          navigation.navigate(routes.HOME)
        })
        .catch(e => {
          setError(true)
          if (e.toString().includes('400')) {
            setMessage('please enter all information')
          } else {
            setMessage('something is wrong try again')
          }
          console.log(e)
        })
    } else {
      alert('please check internet')
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
            <Title fontWeight={'700'}>Location Lost Case</Title>
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
                {/* <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </Modal>
          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Case name</Title>
          </Row>
          <Controller
            shouldUnregister={register('name')}
            control={control}
            name='name'
            defaultValue={caseDetails.name}
            render={({ field: { onChange, value } }) => (
              <Input
                inputPlaceHolder={caseDetails.name}
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
            defaultValue={caseDetails.description}
            render={({ field: { onChange, value } }) => (
              <Input
                isDescription
                Height={'150px'}
                inputPlaceHolder={caseDetails.description}
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
            defaultValue={caseDetails.age.toString()}
            render={({ field: { onChange, value } }) => (
              <Input
                inputPlaceHolder={caseDetails.age.toString()}
                keyboardType='numeric'
                onTermChange={value => onChange(value)}
                term={value}
              ></Input>
            )}
            name='age'
          />
          {errors.age && <Text style={styles.warningText}>{errors.age.message}</Text>}

          <Row direction={'flex-start'}>
            <HorizontalSpace width={'19px'} />
            <Title fontWeight={'700'}>Date of Loss</Title>
          </Row>

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
            shouldUnregister={register('phone')}
            control={control}
            name='phone'
            defaultValue={caseDetails.phone}
            render={({ field: { onChange, value } }) => (
              <Input
                keyboardType='phone-pad'
                inputPlaceHolder={caseDetails.phone}
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
export default EditCaseScreen
