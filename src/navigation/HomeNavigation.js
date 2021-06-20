import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'react-native'
<<<<<<< HEAD
import Home from '../screens/Home'
import CaseDetailsScreen from '../screens/CaseDetailsScreen'
import Icon from '../components/layout/Icon'
=======
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Home from '../screens/Home';
import CaseDetailsScreen from "../screens/CaseDetailsScreen";
import Icon from "../components/core/Icon";
import routes from "./routes";
>>>>>>> ahmed


const Stack = createStackNavigator()

<<<<<<< HEAD
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
=======
const HomeNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"Home"}
                component={Home}
                options={{
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#2DDA93',
                        height: 140
                    },
                    headerTitle: () => (
                        <Text style={{ fontSize: 30, color: 'white' }}>
>>>>>>> ahmed
                            Lost cases
            </Text>
          ),

<<<<<<< HEAD
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
=======
                    headerRight: (
                    ) => (
                        <Icon
                            backgroundColor='white'
                            bottom='0px'
                            borderRadius='15px'
                            size='50px'
                            marign='10px'
                            onPress={() => { navigation.navigate(routes.ADD) }}
                            IconComponent={<MaterialCommunityIcons name='plus' size={32} color='#2DDA93' />}
                        />
                    )
                }}
>>>>>>> ahmed
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
