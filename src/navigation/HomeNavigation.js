import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'react-native'
import Home from '../screens/Home'
import CaseDetailsScreen from '../screens/CaseDetailsScreen'
import Icon from '../components/layout/Icon'


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
            height: 140
          },
          headerTitle: () => (
            <Text style={{ fontSize: 30, color: 'white' }}>
                            Lost cases
            </Text>
          ),

          headerRight: (
          ) => (
            <Icon
              backgroundColor='white'
              iconName='plus'
              iconColor='#2DDA93'
              bottom='0px'
              borderRadius='20px'
              size='60px'
              marign='10px'
            />
          )
        }}
      />
      <Stack.Screen
        name={'Details'}
        component={CaseDetailsScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
