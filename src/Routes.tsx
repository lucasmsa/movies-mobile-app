import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import { Colors } from './types/Colors'
import Details from './pages/Details'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: Colors.DarkBlue,
        }
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}

export default Routes