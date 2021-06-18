import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import TabNavigator from './TabNavigation'


export default function MainNavigation() {

  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}


