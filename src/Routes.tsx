import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import { StatusBar } from 'react-native'
import { Colors } from './types/Colors'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: Colors.DarkBlue }
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      {/* <Stack.Screen name='Details' component={SignUp} /> */}
    </Stack.Navigator>
  )
}

export default Routes