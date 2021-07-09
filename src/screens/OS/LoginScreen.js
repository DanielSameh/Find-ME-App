import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import colors from '../../components/styles/colors'
import Typography from '../../components/core/Typography'
import VerticalSpace from '../../components/layout/VerticalSpace'
import Button from '../../components/core/Button'
import Input from '../../components/core/Input'
import Row from '../../components/layout/Row'
import Container from '../../components/layout/ContainerView'
import useApi from '../../hooks/useApi'
import userApi from '../../api/user'
import useAuth from '../../auth/useAuth'

const SignInSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6, 'password must be at least 6 char'),
})

const LoginScreen = ({ navigation }) => {
  const loginApi = useApi(userApi.signIn)
  const { login } = useAuth()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignInSchema) })
  const onSubmit = async userinfo => {
    const { data } = await loginApi.request(userinfo)

    console.log(data)
    login(data.token)
    console.log(data.token)
    navigation.navigate('Navigator')
  }

  return (
    <Container>
      <View style={{ marginBottom: 18 }}>
        <Typography marginTop={40} alignSelf={'center'} fontSize={'22px'} fontWeight={'bold'}>
          Welcome Back!
        </Typography>
        <Typography marginTop={15}>Please enter your account here</Typography>
      </View>
      <VerticalSpace />

      <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>
        Username
      </Typography>
      <Controller
        control={control}
        shouldUnregister={register('email')}
        render={({ field: { onChange, value } }) => (
          <Row>
            <Input
              inputPlaceHolder={'Email or Phone number'}
              Password={false}
              onTermChange={value => onChange(value)}
              term={value}
            >
              <MaterialCommunityIcons
                style={styles.iconStyle}
                name='email-outline'
                size={24}
                color='#3E5481'
              />
            </Input>
          </Row>
        )}
        name='email'
        defaultValue=''
      />
      {errors.email && <Text style={styles.warningText}>{errors.email.message}</Text>}
      <VerticalSpace />
      <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>
        Password
      </Typography>
      <Controller
        control={control}
        shouldUnregister={register('password')}
        render={({ field: { onChange, value } }) => (
          <Row>
            <Input
              inputPlaceHolder={'Password'}
              Password={true}
              onTermChange={value => onChange(value)}
              term={value}
            >
              <SimpleLineIcons style={styles.iconStyle} name='lock' size={24} color='#3E5481' />
            </Input>
          </Row>
        )}
        name='password'
        defaultValue=''
      />
      {errors.password && <Text style={styles.warningText}>{errors.password.message}</Text>}
      <TouchableOpacity
        style={{ alignSelf: 'flex-end', marginRight: 15 }}
        onPress={() => navigation.navigate('ForgetPassword')}
      >
        <Typography fontColor={'#2E3E5C'}>Forgot Password?</Typography>
      </TouchableOpacity>
      <Button title='Submit' onPress={handleSubmit(onSubmit)}>
        Login
      </Button>

      <Row>
        <Typography marginTop={25} fontColor={'#3E5481'}>
          Don't have any account?
        </Typography>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Typography fontColor={'#1FCC79'} fontWeight={'bold'} justifyContent={'center'}>
            {' '}
            Sign Up
          </Typography>
        </TouchableOpacity>
      </Row>
    </Container>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  warningText: {
    alignSelf: 'flex-end',
    marginRight: 30,
    color: colors.watermelonColor,
  },
})

export default LoginScreen
