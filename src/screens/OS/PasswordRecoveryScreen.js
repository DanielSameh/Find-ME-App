import React,{useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import Button from '../../components/core/Button'
import Input from '../../components/core/Input'
import Container from '../../components/layout/ContainerView'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ModalPoup from '../../components/core/ModalPoup'
import { AntDesign } from '@expo/vector-icons'
import Typography from '../../components/core/Typography'


const PasswordRecoveryScreen = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Container>
      <View style={{ marginBottom: 18 }}>
        <Typography margin={20} fontSize={'26px'} fontWeight={'bold'} textAlign={'center'}>Password Recovery</Typography>

        <Typography fontColor={'#9FA5C0'} textAlign={'center'} >Enter your email to recover your password</Typography>
      </View>
      <Input inputPlaceHolder={'Email or Phone number'} Password={false}>
        <MaterialCommunityIcons
          style={styles.iconStyle}
          name='email-outline'
          size={24}
          color='#3E5481'
        />
      </Input>

      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <AntDesign style={styles.iconStyle} name="close" size={28} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <AntDesign   name="checkcircle" size={120} color="green" />
        </View>

        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
        Please check your emails for a message with your code.
        </Text>
      </ModalPoup>

      <Button onPress={() => setVisible(true)}>Continue</Button>
      
    </Container>
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})

export default PasswordRecoveryScreen
