import React from 'react'
import { View, ImageBackground, ScrollView } from 'react-native'
import { Entypo, EvilIcons, MaterialIcons } from '@expo/vector-icons'

import Container from '../components/layout/ContainerView'
import colors from '../components/styles/colors'
import Circle from '../components/core/Circle'
import Typography from '../components/core/Typography'
import Row from '../components/layout/Row'
import HorizontalSpace from '../components/layout/HorizontalSpace'
import VerticalSpace from '../components/layout/VerticalSpace'
import styled from 'styled-components'
import CustomImage from '../components/core/Image'
import VerticalLine from '../components/layout/VerticalLine'
import Icon from '../components/core/Icon'
import useApi from '../hooks/useApi'
import caseApi from '../api/cases'

const CaseDetailsScreen = ({ route, navigation }) => {
  const { lostCase, user } = route.params
  const caseId = {
    _id: lostCase._id,
  }

  const lostCaseApi = useApi(caseApi.deleteCase)
  const deleteCase = async () => {
    await lostCaseApi.request(caseId).then(navigation.pop())
  }

  return (
    <Container bc='white'>
      <View style={{ height: 300, width: '100%' }}>
        <ImageBackground style={{ height: 300 }} source={{ uri: lostCase.images[0] }}>
          <VerticalSpace height={32} />
          <RowView>
            <Icon
              backgroundColor='rgba(255, 255, 255, 0.2)'
              size='56px'
              borderRadius={'27px'}
              onPress={() => {
                navigation.pop()
              }}
              IconComponent={<Entypo name='chevron-left' size={32} color='white' />}
            />
            <Row>
              <Icon
                backgroundColor='rgba(255, 255, 255, 0.2)'
                size='56px'
                borderRadius={'27px'}
                onPress={() => {
                  navigation.navigate('EditCase', lostCase)
                }}
                IconComponent={<Entypo name='edit' size={32} color='white' />}
              />
              <HorizontalSpace width='5px' />
              <Icon
                backgroundColor='rgba(255, 255, 255, 0.2)'
                size='56px'
                borderRadius={'27px'}
                onPress={() => {
                  deleteCase()
                }}
                IconComponent={<MaterialIcons name='delete' size={32} color='white' />}
              />
            </Row>
          </RowView>
        </ImageBackground>
      </View>
      <Scroll>
        <VerticalSpace height={44} />
        <RowView>
          <Typography fontColor={colors.black} fontWeight='bold' fontSize='18px'>
            {lostCase.name}
          </Typography>
          <Row direction='flex-start'>
            <Circle
              height='13px'
              width='13px'
              borderRadius='6.5px'
              borderColor={lostCase.state == 'Founded' ? 'green' : 'red'}
              borderWidth='4px'
              bc='white'
            />
            <HorizontalSpace width={'12px'} />
            <Typography
              fontColor={lostCase.state == 'Founded' ? 'green' : 'red'}
              fontWeight='bold'
              fontSize='16px'
            >
              {lostCase.isFounded ? 'Founded' : 'Not Founded'}
            </Typography>
          </Row>
        </RowView>
        <VerticalSpace height={24} />
        <View style={{ height: 32 }}>
          <Row direction='flex-start'>
            <CustomImage
              width={32}
              uri='https://i.picsum.photos/id/1014/200/300.jpg?hmac=nxBnyyuXuAKEA6yVxBtNN4YjpjaciQXA3KwTRICTlWU'
              borderBottomLeftRadius={16}
              borderBottomRightRadius={16}
              borderTopLeftRadius={16}
              borderTopRightRadius={16}
            />
            <HorizontalSpace />
            <Typography fontColor='black' fontWeight='700'>
              {user.name}
            </Typography>
          </Row>
        </View>
        <VerticalLine />
        <Typography fontColor='black' fontSize={'17px'} fontWeight='700'>
          Description
        </Typography>
        <VerticalSpace height={8} />
        <Typography fontColor='black' fontSize={'15px'} fontWeight='500' isParagrapgh>
          {lostCase.description}
        </Typography>
        <VerticalLine />
        <Row direction='flex-start'>
          <Typography fontColor='black' fontSize={'17px'} fontWeight='700'>
            Location
          </Typography>
          <HorizontalSpace width={'24px'} />
          <EvilIcons name='location' size={24} color='#9FA5C0' />
          <Typography fontColor='#9FA5C0' fontWeight='bold' fontSize='16px'></Typography>
        </Row>
        <VerticalLine />
        <Typography fontColor='black' fontSize={'17px'} fontWeight='700'>
          Phone
        </Typography>
        <VerticalSpace />
        <Row>
          <Typography fontColor='black' fontSize={'17px'} fontWeight='700'>
            {lostCase.phone}
          </Typography>
        </Row>
        <VerticalLine />
      </Scroll>
    </Container>
  )
}

export default CaseDetailsScreen

const RowView = styled(View)`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  align-self: flex-start;
  justify-content: space-between;
  align-items: center;
`
const Scroll = styled(ScrollView)`
  top: -30px;
  bottom: 30px;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  height: 100%;
  background-color: white;
`
