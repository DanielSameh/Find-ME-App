import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import Container from '../components/layout/ContainerView'
import CustomImage from '../components/core/Image'
import Typography from '../components/core/Typography'
import VerticalSpace from '../components/layout/VerticalSpace'
import ListItem from '../components/core/ListItem'
import routes from '../navigation/routes'
import Icon from '../components/core/Icon'
import useAuth from '../auth/useAuth'
import userApi from '../api/user'
import useApi from '../hooks/useApi'

const menuItem = [
  {
    id: '1',
    title: 'Sign Out',
    icon: {
      name: 'account-box',
      color: 'green',
    },
  },
  {
    id: '2',
    title: 'Notification',
    icon: {
      name: 'notifications',
      color: 'green',
    },
  },
  {
    id: '3',
    title: 'Privacy and security',
    icon: {
      name: 'lock',
      color: 'green',
    },
  },
  {
    id: '4',
    title: 'About',
    icon: {
      name: 'warning',
      color: 'green',
    },
  },
]

const ProfileScreen = ({ navigation }) => {
  const { logOut, user } = useAuth()
  const getUser = useApi(userApi.me)
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    getUser.request().then(res => setCurrentUser(res.data))
  }, [])

  return (
    <Container bc='white'>
      <HeaderView>
        <VerticalSpace height={30} />
        <RowView>
          <Icon
            backgroundColor='transparent'
            onPress={() => {
              navigation.navigate(routes.HOME)
            }}
            height={32}
            width={32}
            IconComponent={<Ionicons name='chevron-back' size={32} color='white' />}
          ></Icon>
          <CustomImage
            width={80}
            height={80}
            uri=''
            assets={require('../../assets/people.png')}
            onError={() => {}}
            onPress={() => {}}
            borderBottomLeftRadius={40}
            borderBottomRightRadius={40}
            borderTopLeftRadius={40}
            borderTopRightRadius={40}
          />

          <Icon
            backgroundColor='transparent'
            height={32}
            width={32}
            IconComponent={<Entypo name='dots-three-vertical' size={32} color='white' />}
          ></Icon>
        </RowView>
        <VerticalSpace height={15} />
        <View>
          <Typography textAlign='center' fontSize='23px' fontWeight='400'>
            {currentUser.name}
          </Typography>
        </View>
      </HeaderView>

      <FlatList
        data={menuItem}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            LeftIconComponent={
              <MaterialIcons name={item.icon.name} size={32} color={item.icon.color} />
            }
            RightIconComponent={
              item.id == 4 ? null : <Entypo name='chevron-right' size={32} color='gray' />
            }
            onPress={
              item.id == 1
                ? () => {
                  logOut(), navigation.navigate('Onboarding')
                }
                : null
            }
          />
        )}
      />
    </Container>
  )
}

export default ProfileScreen

const HeaderView = styled(View)`
  height: 180px;
  width: 100%;
  background-color: rgba(41, 216, 144, 1);
`

const RowView = styled(View)`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  align-self: flex-start;
  justify-content: space-between;
  align-items: center;
`
