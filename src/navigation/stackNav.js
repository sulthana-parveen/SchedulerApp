import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from '../screens/SplashScreen/SplashScreen'
import DashBoard from '../screens/DashBoard/DashBoard'

const Stack = createStackNavigator()
const StackNav = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
    <Stack.Screen name='SplashScreen' component={SplashScreen}/>
    <Stack.Screen name ='DashBoard' component={DashBoard}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNav