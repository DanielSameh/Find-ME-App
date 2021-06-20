import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AddScreen from '../screens/AddCaseScreen'
import ProfileScreen from '../screens/ProfileScreen'
import Icon from '../components/layout/Icon'
import HomeNavigator from './HomeNavigation'



const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'HomeNavigator'}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons
            name='home'
            size={40}
            color={focused ? '#2DDA93' : '#D2D2D2'}
          />,
          tabBarLabel: 'Home',

        }}
      />
      <Tab.Screen
        name={'Add'}
        component={AddScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <Icon
              iconColor='white'
              iconName='plus'
              iconSize={40}
              onPress={() => { navigation.navigate('Add') }}
              backgroundColor='rgb(72, 162, 245)'
            
            />
          ),
        })}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MaterialCommunityIcons
              name='account'
              size={40}
              color={focused ? '#2DDA93' : '#D2D2D2'}
            />
          },
        }}
      />

    </Tab.Navigator>
  )
}

export default TabNavigator
