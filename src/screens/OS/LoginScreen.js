import React from 'react'
import { View, StyleSheet, Text,TouchableOpacity} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import Button from '../../components/core/Button'
import Input from '../../components/core/Input'
import Row from '../../components/layout/Row'
import Container from '../../components/layout/ContainerView'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import colors from '../../components/styles/colors'
import Typography from '../../components/core/Typography'
import VerticalSpace from '../../components/layout/VerticalSpace'
const LoginScreen = ({ navigation }) => {

  const { control, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data =>{ console.log(data),navigation.navigate('Navigator')}

  return (
    <Container>
      <View style={{ marginBottom: 18 }}>
        <Typography marginTop={40} alignSelf={'center'} fontSize={'22px'} fontWeight={'bold'}  >Welcome Back!</Typography>
        <Typography marginTop ={15} >Please enter your account here</Typography>
      </View>
      <VerticalSpace />

      <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Username</Typography>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Row>
            <Input inputPlaceHolder={'Email or Phone number'} Password={false} onTermChange={value => onChange(value)} term={value}>
              <MaterialCommunityIcons
                style={styles.iconStyle}
                name='email-outline'
                size={24}
                color='#3E5481'
              />
            </Input>
          </Row>
        )}
        name="Email"
        // eslint-disable-next-line react/jsx-no-duplicate-props
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.Email && <Text style={styles.warningText} >Name is required.</Text>}
      <VerticalSpace/>
      <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Password</Typography>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Row>
            <Input inputPlaceHolder={'Password'} Password={true} onTermChange={value => onChange(value)} term={value} >
              <SimpleLineIcons style={styles.iconStyle} name='lock' size={24} color='#3E5481' />
            </Input>
          </Row>
        )}
        name="Password"
        defaultValue=""
      />
      {errors.Password && <Text style={styles.warningText} >Password is required.</Text>}
      <TouchableOpacity style={{alignSelf:'flex-end', marginRight:15}} onPress={() => navigation.navigate('ForgetPassword')}>
        <Typography fontColor={'#2E3E5C'} >Forgot Password?</Typography>
      </TouchableOpacity>
      <Button title="Submit" onPress={handleSubmit(onSubmit)}>Login</Button>

      <Row>
        <Typography marginTop={25} fontColor={'#3E5481'}>Don't have any account?</Typography>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>  
          <Typography  fontColor={'#1FCC79'} fontWeight={'bold'} justifyContent={'center'} >     Sign Up</Typography>
        </TouchableOpacity>
      </Row>
    </Container>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: 15
  },
  warningText:{
    alignSelf:'flex-end',
    marginRight:30,
    color: colors.watermelonColor
  }
})

export default LoginScreen