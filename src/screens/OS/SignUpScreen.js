import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Button from '../../components/core/Button'
import Input from '../../components/core/Input'
import Container from '../../components/layout/ContainerView'
import Row from '../../components/layout/Row'
import { useForm, Controller } from 'react-hook-form'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import colors from '../../components/styles/colors'
import Typography from '../../components/core/Typography'
import VerticalSpace from '../../components/layout/VerticalSpace'

// import { AntDesign } from '@expo/vector-icons'



const SignUpScreen  = ({ navigation })  =>  {
  const { control, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data =>{ console.log(data),navigation.navigate('Navigator')}
  
  return (
    <ScrollView>
      <Container>
        <View style={{ marginBottom: 18 }}>
          <Typography marginTop={30} alignSelf={'center'} fontSize={'22px'} fontWeight={'bold'}  >Register Account</Typography>

          <Typography fontColor={'#9FA5C0'} isParagrapgh margin={15} textAlign={'center'} >For the prupose of industry regulation, your details are required.</Typography>
          
        </View>
        <View style={{width:'80%', height:1, backgroundColor:'#F5F5F5', borderRadius:30}}></View>
        <VerticalSpace/>
        <Typography  alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Name</Typography>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
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
          // eslint-disable-next-line react/jsx-no-duplicate-props
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.name && <Text style={styles.warningText} >Name is required.</Text>}
        <VerticalSpace/>
        <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Email Address</Typography>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
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
          // eslint-disable-next-line react/jsx-no-duplicate-props
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.email && <Text style={styles.warningText}>Email is required.</Text>}

        <VerticalSpace/>
        <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Phone Number</Typography>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
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
          name="Phone"
          // eslint-disable-next-line react/jsx-no-duplicate-props
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.Phone && <Text style={styles.warningText} >Phone is required.</Text>}
        <VerticalSpace/>
        <Typography  alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Password</Typography>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength:6,
          
          }}
          render={({ field: { onChange, value } }) => (
            <Row>
              <Input inputPlaceHolder={'Password'} Password={true} onTermChange={value => onChange(value)} term={value}  >
                <SimpleLineIcons style={styles.iconStyle} name='lock' size={24} color='#3E5481' />
              </Input>
            </Row>
          )}
          name="Password"
          defaultValue=""

        />
        {errors.Password && <Text style={styles.warningText}>Password is required.</Text>}
        <VerticalSpace/>
        <Typography alignSelf={'flex-start'} marginLeft={40} fontColor={colors.grayOutline}>Confirm Password</Typography>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength:6,
          
          }}
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
        {errors.equalPassword && <Text style={styles.warningText}>Password confirmation is required.</Text>}
        <VerticalSpace/>
        <View style={{width:'80%', height:1, backgroundColor:'#F5F5F5', borderRadius:30}}></View>
        <Button title="Submit" onPress={handleSubmit(onSubmit)}>Sign Up</Button>
        <Typography isParagrapgh margin={15} textAlign={'center'} fontSize={'12px'}>By signing up, you are agreeing to our Terms & Conditions and Privacy Policy.</Typography>
        <VerticalSpace height={50}/>

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
  warningText:{
    alignSelf:'flex-end',
    marginRight:30,
    color: colors.watermelonColor
  }
})

export default SignUpScreen
