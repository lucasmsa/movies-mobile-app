import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Container, Header, HeaderWelcomeText, HeaderWelcome, ProfilePicture, HeaderNameText } from './styles';

const Home: React.FC = () => (
  <Container>
    <Header>
      <ProfilePicture
        source={require('../../../assets/images/profile.png')}
      />
      <HeaderWelcome>
        <HeaderWelcomeText>Welcome</HeaderWelcomeText>
        <HeaderNameText>Ivan Locke</HeaderNameText>
      </HeaderWelcome>
    </Header>
  </Container>
)

export default Home;