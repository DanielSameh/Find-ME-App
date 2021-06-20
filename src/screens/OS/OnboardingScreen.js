import React from 'react'
import { Image } from 'react-native'
import Button from '../../components/core/Button'
import Typography from '../../components/core/Typography'
import Container from '../../components/layout/ContainerView'
import Row from '../../components/layout/Row'
import HorizontalSpace from '../../components/layout/HorizontalSpace'
import VerticalSpace from '../../components/layout/VerticalSpace'
import colors from '../../components/styles/colors'
const OnboardingScreen = ({navigation}) => {
  return (
    <Container>
      <VerticalSpace height={'55'}/>
      <Image source={require('../../../assets/Boy.png')}/>
      <VerticalSpace/>
      <Typography text={'Find ME'} fontSize={22} fontWeight={'700'}/>
      <Typography text={'We help you finding your lost kids'} fontSize={15} fontColor={colors.grayOutline}/>
      <VerticalSpace/>
      <Row justifyContent={'space-around'}>
        <HorizontalSpace width={'1px'}/>
        <Button width={'180px'} onPress={() => navigation.navigate('SignIn')}>Lost Kid</Button>
        <Button width={'180px'}>Found Kid</Button>
        <HorizontalSpace width={'1px'}/>
      </Row>
    </Container>  )
}

export default OnboardingScreen
