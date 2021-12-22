import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar, View } from 'react-native'
import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import Routes from './Routes'
import { Colors } from './types/Colors';
import { ApplicationContainer } from './global/styles';

const App: React.FC = () => (
  <NavigationContainer theme={{
    dark: true,
    colors: {
      ...DarkTheme.colors,
      background: Colors.DarkBlue,
    }
  }}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor={Colors.LightBlue}
      />
      <ApplicationContainer>
        <Routes />
      </ApplicationContainer>
  </NavigationContainer>
)

export default App;