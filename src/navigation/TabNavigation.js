import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AddScreen from '../screens/AddCaseScreen';
import ProfileScreen from '../screens/ProfileScreen';

import Icon from '../components/core/Icon';
import HomeNavigator from "./HomeNavigation";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    shadowOffset: {
                        height: 0, height: 0
                    }
                }
            }}
        >

            <Tab.Screen
                name={"HomeNavigator"}
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons
                        name='home'
                        size={40}
                        color={focused ? '#2DDA93' : '#D2D2D2'}
                    />,
                    tabBarLabel: "Home",

                }}
            />
            <Tab.Screen
                name={"Add"}
                component={AddScreen}
                options={({ navigation }) => ({
                    tabBarVisible: false,
                    tabBarButton: () => (
                        <Icon
                            backgroundColor='rgba(72, 162, 245, 1)'
                            bottom='40px'
                            borderRadius='40px'
                            size='80px'
                            IconComponent={<MaterialCommunityIcons name='plus' size={40} color='white' />}
                            onPress={() => {
                                navigation.navigate("Add")
                            }}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name={"Profile"}
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

export default TabNavigator;
