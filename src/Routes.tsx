import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import { Colors } from './types/Colors'
import Details from './pages/Details'
import VideoPlayer from './pages/VideoPlayer'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          flex: 1,
          backgroundColor: Colors.DarkBlue,
        }
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Details' component={Details} />
      <Stack.Screen name='VideoPlayer' component={VideoPlayer} />
    </Stack.Navigator>
  )
}

export default Routes