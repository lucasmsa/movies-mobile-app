import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import MovieCard from '../../components/MovieCard';
import Search from '../../components/Search';
import { MOVIE_DB_API_KEY } from '../../constants/apiKey'; 
import { imageUrl } from '../../constants/mediaUrl';
import { api } from '../../service/api';
import { Container, Header, HeaderWelcomeText, HeaderWelcome, ProfilePicture, HeaderNameText, SearchContainer, MoviesContainer } from './styles';

interface IMovie {
  id: string;
  name: string;
  cover: string;
  rating: number;
}

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
      <MoviesContainer>
        {movies.map((movie) => {
          const { name, cover, rating } = movie;
          return (
            <MovieCard 
              name={name} 
              cover={cover} 
              rating={rating}
            />
          )
         })
        }
      </MoviesContainer>
    </Container>
  )
}

export default Home;