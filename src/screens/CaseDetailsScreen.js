import React from 'react'
import { View, ImageBackground, ScrollView } from 'react-native'
import { Entypo, EvilIcons } from '@expo/vector-icons'
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

const CaseDetailsScreen = ({ route, navigation }) => {

  const lostCase = route.params
  return (
    <Container bc='white'  >
      <View style={{ height: 300, width: '100%' }}>
        <ImageBackground style={{ height: 300 }} source={{ uri: lostCase.uri }} >
          <VerticalSpace height={32} />
          <RowView>
            <Icon
              backgroundColor='rgba(255, 255, 255, 0.2)'
              size={56}
              borderRadius={'27px'}
              onPress={() => { navigation.pop() }}
              IconComponent={<Entypo name="chevron-left" size={32} color="white" />}
            />
            <Icon
              backgroundColor='rgba(255, 255, 255, 0.2)'
              size={56}
              borderRadius={'27px'}
              onPress={() => { }}
              IconComponent={<Entypo name="edit" size={32} color="white" />}
            />
          </RowView>
        </ImageBackground>
      </View>
      <Scroll >
        <VerticalSpace height={44} />
        <RowView>
          <Typography
            fontColor={colors.black}
            fontWeight='bold'
            fontSize='18px'
          >
            {lostCase.caseName}
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
              {lostCase.state}
            </Typography>
          </Row>
        </RowView>
        <VerticalSpace height= {24} />
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
                            Ahmed Mohamed
            </Typography>
          </Row>
        </View>
        <VerticalLine />
        <Typography fontColor='black' fontSize={'17px'} fontWeight='700'>
                    Description
        </Typography>
        <VerticalSpace height={8} />
        <Typography fontColor='black' fontSize={'15px'} fontWeight='500' isParagrapgh>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
        </Typography>
        <VerticalLine />
        <Row direction='flex-start'>

          <Typography fontColor='black' fontSize={'17px'} fontWeight='700'>
                        Location
          </Typography>
          <HorizontalSpace width={'24px'} />
          <EvilIcons name="location" size={24} color="#9FA5C0" />
          <Typography
            fontColor='#9FA5C0'
            fontWeight='bold'
            fontSize='16px'
          >
            {lostCase.caseLocation}
          </Typography>
        </Row>
        <VerticalLine />
        <Typography fontColor='black' fontSize={'17px'} fontWeight='700'>
                    Phone
        </Typography>
        <VerticalSpace />
        <Row>
          <Typography fontColor='black' fontSize={'17px'} fontWeight='700' >
                        +20 1234567890
          </Typography>
        </Row>
        <VerticalLine />
      </Scroll>
    </Container >
  )
}

export default CaseDetailsScreen

const RowView = styled(View)`
width: 100%;
padding-left: 10;
padding-right: 10;
flex-direction : row;
align-self:flex-start;
justify-content: space-between ;
align-items: center;
`
const Scroll = styled(ScrollView)`
  top: -30px;
  bottom:30px ;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  height: 100%;
  background-color: white;
`