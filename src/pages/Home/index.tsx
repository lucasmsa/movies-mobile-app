import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import MovieCard from '../../components/MovieCard';
import Search from '../../components/Search';
import { MOVIE_DB_API_KEY } from '../../constants/apiKey'; 
import { imageUrl } from '../../constants/mediaUrl';
import { Container, Header, HeaderWelcomeText, HeaderWelcome, ProfilePicture, HeaderNameText, SearchContainer, MoviesContainer } from './styles';

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
          console.log(MOVIE_DB_API_KEY)
        }}
      />
    </SearchContainer>
    <MoviesContainer>
      <MovieCard 
        name={'The Last Duel'} 
        cover={'zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg'} 
        rating={7}
      />
    </MoviesContainer>
  </Container>
)

export default Home;