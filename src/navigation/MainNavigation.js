import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './TabNavigation'
import LoginScreen from '../screens/Auth/LoginScreen'
import SignUpScreen from '../screens/Auth/SignUpScreen'
import testScreen from '../screens/Auth/testScreen'
import PasswordRecoveryScreen from '../screens/Auth/PasswordRecoveryScreen'
import OnboardingScreen from '../screens/Auth/OnboardingScreen'
import AddLostCaseScreen from '../screens/AddLostCaseScreen'
import AddFoundCaseScreen from '../screens/AddFoundCaseScreen'
import AuthContext from '../auth/context'
import EditCaseScreen from '../screens/EditCaseScreen'

export default function MainNavigation() {
  const Stack = createStackNavigator()
  const [user, setUser] = useState()

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Onboarding'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Onboarding' component={OnboardingScreen} />
          <Stack.Screen name='SignIn' component={LoginScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='Test' component={testScreen} />
          <Stack.Screen name='AddLostCase' component={AddLostCaseScreen} />
          <Stack.Screen name='AddFoundCase' component={AddFoundCaseScreen} />
          <Stack.Screen name='EditCase' component={EditCaseScreen} />
          <Stack.Screen name='ForgetPassword' component={PasswordRecoveryScreen} />
          <Stack.Screen name='Navigator' component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
