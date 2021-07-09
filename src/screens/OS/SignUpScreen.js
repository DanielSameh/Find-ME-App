import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Button from '../../components/core/Button'
import Input from '../../components/core/Input'
import Container from '../../components/layout/ContainerView'
import Row from '../../components/layout/Row'
import colors from '../../components/styles/colors'
import Typography from '../../components/core/Typography'
import VerticalSpace from '../../components/layout/VerticalSpace'
import useApi from '../../hooks/useApi'
import userApi from '../../api/user'
import useAuth from '../../auth/useAuth'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignUpSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
  password: yup.string().required().min(6, 'password must be at least 6 char'),
  equalPassword: yup.string().oneOf([yup.ref('password'), null], 'password must match')
})

const SignUpScreen = ({ navigation }) => {

  const registerApi = useApi(userApi.signUp)
  const { login } = useAuth()

  const { register, control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(SignUpSchema) })
  const onSubmit = async userInfo => {

    const d = Object.fromEntries(
      Object.entries(userInfo).filter(([key, value]) => key !== 'equalPassword')
    )

    const { data } = await registerApi.request(d)

    login(data.token)
    console.log(data.token)
    navigation.navigate('Navigator')
  }

  return (
    <ScrollView>
      <Container>
        <View style={{ marginBottom: 18 }}>
          <Typography marginTop={30} alignSelf={'center'} fontSize={'22px'} fontWeight={'bold'}  >Register Account</Typography>

          <Typography fontColor={'#9FA5C0'} isParagrapgh margin={15} textAlign={'center'} >For the prupose of industry regulation, your details are required.</Typography>

        </View>
        <View style={{ width: '80%', height: 1, backgroundColor: '#F5F5F5', borderRadius: 30 }}></View>
        <VerticalSpace />
        <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Name</Typography>
        <Controller
          shouldUnregister={register('name')}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Row>
              <Input inputPlaceHolder={'Full Name'} Password={false} onTermChange={value => onChange(value)} term={value}>
                <MaterialCommunityIcons
                  style={styles.iconStyle}
                  name='account'
                  size={24}
                  color='#3E5481'
                />
              </Input>
            </Row>
          )}
          name="name"
          defaultValue=""
        />
        {errors.name && <Text style={styles.warningText} >{errors.name.message}</Text>}

        <VerticalSpace />
        <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Email Address</Typography>
        <Controller
          control={control}
          shouldUnregister={register('email')}
          render={({ field: { onChange, value } }) => (
            <Row>
              <Input inputPlaceHolder={'Email'} Password={false} onTermChange={value => onChange(value)} term={value}>
                <MaterialCommunityIcons
                  style={styles.iconStyle}
                  name='email-outline'
                  size={24}
                  color='#3E5481'
                />
              </Input>
            </Row>
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && <Text style={styles.warningText}>{errors.email.message}</Text>}

        <VerticalSpace />
        <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Phone Number</Typography>
        <Controller
          shouldUnregister={register('phone')}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Row>
              <Input inputPlaceHolder={'Phone No.'} Password={false} onTermChange={value => onChange(value)} term={value}>
                <MaterialCommunityIcons
                  style={styles.iconStyle}
                  name='cellphone'
                  size={24}
                  color='#3E5481'
                />
              </Input>
            </Row>
          )}
          name="phone"
          defaultValue=""
        />
        {errors.phone && <Text style={styles.warningText} >{errors.phone.message}</Text>}
        <VerticalSpace />
        <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Password</Typography>
        <Controller
          shouldUnregister={register('password')}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Row>
              <Input inputPlaceHolder={'Password'} Password={true} onTermChange={value => onChange(value)} term={value}  >
                <SimpleLineIcons style={styles.iconStyle} name='lock' size={24} color='#3E5481' />
              </Input>
            </Row>
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && <Text style={styles.warningText}>Password is required.</Text>}
        <VerticalSpace />
        <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Confirm Password</Typography>
        <Controller
          shouldUnregister={register('equalPassword')}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Row>
              <Input inputPlaceHolder={'Confirm Password'} Password={true} onTermChange={value => onChange(value)} term={value}  >
                <SimpleLineIcons style={styles.iconStyle} name='lock' size={24} color='#3E5481' />
              </Input>
            </Row>
          )}
          name="equalPassword"
          defaultValue=""
        />
        {errors.equalPassword && <Text style={styles.warningText}>{errors.equalPassword.message}</Text>}
        <VerticalSpace />
        <View style={{ width: '80%', height: 1, backgroundColor: '#F5F5F5', borderRadius: 30 }}></View>
        <Button title="Submit" onPress={handleSubmit(onSubmit)}>Sign Up</Button>
        <Typography isParagrapgh margin={15} textAlign={'center'} fontSize={'12px'}>By signing up, you are agreeing to our Terms & Conditions and Privacy Policy.</Typography>
        <VerticalSpace height={50} />

      </Container>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  PasswordCheckStyle: {
    alignItems: 'flex-start',
    marginLeft: 80,
    marginBottom: 60,
    width: '100%',
  },
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  warningText: {
    alignSelf: 'flex-end',
    marginRight: 30,
    color: colors.watermelonColor
  }
})

export default SignUpScreen
