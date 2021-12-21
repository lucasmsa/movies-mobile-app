import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import MovieCard from '../../components/MovieCard';
import Search from '../../components/Search';
import { MOVIE_DB_API_KEY } from '../../constants/apiKey'; 
import { imageUrl } from '../../constants/mediaUrl';
import { api } from '../../service/api';
import { IMovie } from '../../types/IMovie';
import { Container, Header, HeaderWelcomeText, HeaderWelcome, ProfilePicture, HeaderNameText, SearchContainer, MoviesContainer, StyledFlatList } from './styles';



const Home: React.FC = () => {
  const [moviesQuery, setMoviesQuery] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);

  const loadMovies = useCallback(async () => {
    const response = await api.get('movie/now_playing', {
      params: {
        api_key: MOVIE_DB_API_KEY,
      }
    })

    response.data.results.map((movie: any) => {
      setMovies(movies => [...movies, {
        id: movie.id,
        name: movie.title,
        cover: movie.poster_path,
        rating: movie.vote_average,
      }])
    })

    console.log('My movies,', movies)
  }, [movies])

  useEffect(() => {
    loadMovies()
  }, [])


  return (
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
      <FlatList
        data={movies}
        contentContainerStyle={{
          width: RFPercentage(42),
          paddingBottom: RFPercentage(20),
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        keyExtractor={(movie: IMovie) => movie.id}
        renderItem={({ item }) => {
          const { id, name, cover, rating } = item;
          return (
            <MovieCard 
              key={id}
              name={name} 
              cover={cover} 
              rating={rating}
            />
          )
        }}
      />
      {/* <MoviesContainer>
        {movies.map((movie) => {
          const { id, name, cover, rating } = movie;
          return (
            <MovieCard 
              key={id}
              name={name} 
              cover={cover} 
              rating={rating}
            />
          )
         })
        }
      </MoviesContainer> */}
    </Container>
  )
}

export default Home;