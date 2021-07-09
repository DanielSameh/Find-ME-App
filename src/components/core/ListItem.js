import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Typography from './Typography'
import HorizontalSpace from '../layout/HorizontalSpace'

const ListItem = ({ onPress, title, LeftIconComponent, RightIconComponent }) => {
  return (
    <Container activeOpacity={0.5} onPress={onPress}>
      <Container activeOpacity={0.5} justify='flex-start' onPress={onPress}>
        {LeftIconComponent}
        <HorizontalSpace width={'10px'} />
        <Typography fontColor='black' fontWeight='400'>
          {title}
        </Typography>
      </Container>
      {RightIconComponent}
    </Container>
  )
}
const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: ${props => props.justify || 'space-between'};
  flex-direction: row;
  width: 100%;
  padding-left: 10px;
  padding-right: 75px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: white;
`
export default ListItem
