import React, { useEffect, useContext } from 'react'
import { Image } from 'react-native'
import Button from '../../components/core/Button'
import Typography from '../../components/core/Typography'
import Container from '../../components/layout/ContainerView'
import Row from '../../components/layout/Row'
import HorizontalSpace from '../../components/layout/HorizontalSpace'
import VerticalSpace from '../../components/layout/VerticalSpace'
import colors from '../../components/styles/colors'
import AuthContext from '../../auth/context'
import authStorage from '../../auth/storage'

const OnboardingScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext)

  const restoreUser = async () => {
    setUser(null)
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  useEffect(() => {
    restoreUser()
  }, [])

  return (
    <Container>
      <VerticalSpace height={55} />
      <Image source={require('../../../assets/Boy.png')} />
      <VerticalSpace />
      <Typography fontSize={'22px'} fontWeight={'700'}>
        Find ME
      </Typography>
      <Typography fontSize={'15px'} fontColor={colors.grayOutline}>
        We help you finding your lost kids
      </Typography>
      <VerticalSpace />
      <Row justifyContent={'space-between'}>
        <Button
          width={'100%'}
          onPress={() => (user ? navigation.navigate('Navigator') : navigation.navigate('SignIn'))}
        >
          Lost Kid
        </Button>
        <HorizontalSpace width={'30px'} />
        <Button width={'100%'}>Found Kid</Button>
      </Row>
    </Container>
  )
}

export default OnboardingScreen
