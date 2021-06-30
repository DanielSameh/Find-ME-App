import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './TabNavigation'
import LoginScreen from '../screens/OS/LoginScreen'
import SignUpScreen from '../screens/OS/SignUpScreen'
import testScreen from '../screens/OS/testScreen'
import PasswordRecoveryScreen from '../screens/OS/PasswordRecoveryScreen'
import OnboardingScreen from '../screens/OS/OnboardingScreen'
import AddCaseScreen from '../screens/AddCaseScreen'
import AuthContext from '../auth/context'



export default function MainNavigation() {

  const Stack = createStackNavigator()
  const [user, setUser] = useState();


  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen name='Onboarding' component={OnboardingScreen} />
        <Stack.Screen name='Test' component={testScreen} />

        <Stack.Screen name='SignIn' component={LoginScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='AddCase' component={AddCaseScreen} />
        <Stack.Screen name='ForgetPassword' component={PasswordRecoveryScreen} />
        <Stack.Screen name='Navigator' component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
=======

    <AuthContext.Provider value={{ user, setUser }} >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='SignIn'
          screenOptions={{
            headerShown: false,
          }}
        >

          {/* <Stack.Screen name='Test' component={testScreen} /> */}
          <Stack.Screen name='Onboarding' component={OnboardingScreen} />
          <Stack.Screen name='SignIn' component={LoginScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='AddCase' component={AddCaseScreen} />
          <Stack.Screen name='ForgetPassword' component={PasswordRecoveryScreen} />
          <Stack.Screen name='Navigator' component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
>>>>>>> a137ec14a0a256f57fbc5a52f2c7929527d3edd0
  )
}


