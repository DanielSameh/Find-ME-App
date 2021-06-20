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

        <Typography marginTop={40} alignSelf={'center'} fontSize={22} fontWeight={'bold'}  text={'Welcome Back!'} />
        <Typography marginTop ={15}text={'Please enter your account here'} />
      </View>
      <VerticalSpace />

      <Typography text={'Username'} alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}/>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Row>
            <Input inputPlaceHolder={'Email or Phone number'} Password={false} onChangeText={value => onChange(value)} value={value}>
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
      <Typography text={'Password'} alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}/>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <Row>
            <Input inputPlaceHolder={'Password'} Password={true} onChangeText={value => onChange(value)} value={value} >
              <SimpleLineIcons style={styles.iconStyle} name='lock' size={24} color='#3E5481' />
            </Input>
          </Row>
        )}
        name="Password"
        defaultValue=""
      />
      {errors.Password && <Text style={styles.warningText} >Password is required.</Text>}
      <TouchableOpacity style={{alignSelf:'flex-end', marginRight:15}} onPress={() => navigation.navigate('ForgetPassword')}>
        <Typography fontColor={'#2E3E5C'} text={'Forgot Password?'}/>
      </TouchableOpacity>
      <Button title="Submit" onPress={handleSubmit(onSubmit)}>Login</Button>

      <Row>
        <Typography fontColor={'#3E5481'} text={"Don't have any account?"}/>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>  
          <Typography fontColor={'#1FCC79'} fontWeight={'bold'} justifyContent={'center'} text={'Sign Up'}/>  
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
