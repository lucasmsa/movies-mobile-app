import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Search from '../../components/Search';
import { Container, Header, HeaderWelcomeText, HeaderWelcome, ProfilePicture, HeaderNameText, SearchContainer } from './styles';

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
    <SearchContainer>
      <Search
        textChanged={(movieQuery) => {
          console.log(movieQuery)
        }}
      />
    </SearchContainer>
  </Container>
)

export default Home;