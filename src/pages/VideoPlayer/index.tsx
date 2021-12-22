import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ActivityIndicator } from 'react-native';
import {  Video } from 'react-native-iconly';
import {  RFValue } from 'react-native-responsive-fontsize';
import { WebView } from 'react-native-webview';
import BackButton from '../../components/BackButton';
import { Colors } from '../../types/Colors';
import { Container, Header, HeaderText, WebViewContainer } from './styles';

interface VideoPlayerProps {
  route: {
    params: {
      link: string;
    }
  }
}

const VideoPlayer = ({ route }: VideoPlayerProps) => {
  const navigation = useNavigation()
  const { link } = route.params;

  return (
    <Container>
      <Header>
        <BackButton
          clicked={() => navigation.goBack()}
        />  
        <HeaderText>Movie Trailer</HeaderText> 
        <Video 
          size={40} 
          set="light" 
          primaryColor={Colors.MediumBlue}
          secondaryColor={Colors.DarkBlue}
        />
      </Header>
      <WebViewContainer>
        <WebView 
          allowsFullscreenVideo={true}
          style={{
            flex: 1, 
            borderRadius: RFValue(8), 
            backgroundColor: Colors.DarkBlue,
          }}
          javaScriptEnabled={true}
          startInLoadingState={true}
          domStorageEnabled={true}
          source={{ uri: `${link}?&autoplay=1&fullscreen=1`}}
          />
      </WebViewContainer>
    </Container>
  )
}

export default VideoPlayer;