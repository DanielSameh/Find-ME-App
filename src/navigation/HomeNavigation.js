import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'react-native'
import Home from '../screens/Home'
import CaseDetailsScreen from '../screens/CaseDetailsScreen'

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#2DDA93',
            height: 130,
          },
          headerLeft: null,
          headerTitle: () => <Text style={{ fontSize: 30, color: 'white' }}>Lost cases</Text>,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name={'Details'}
        component={CaseDetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
