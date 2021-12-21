import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import MovieCard from '../../components/MovieCard';
import Search from '../../components/Search';
import { MOVIE_DB_API_KEY } from '../../constants/apiKey'; 
import { api } from '../../service/api';
import { Colors } from '../../types/Colors';
import { IMovie } from '../../types/IMovie';
import { Container, Header, HeaderWelcomeText, HeaderWelcome, ProfilePicture, HeaderNameText, SearchContainer, MoviesContainer, StyledFlatList, LoadingContainer, BottomLoadingContainer } from './styles';



const Home: React.FC = () => {
  const [moviesQuery, setMoviesQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState({
    films: [] as IMovie[],
    loading: false,
    page: 1,
  });

  const loadMovies = useCallback(async () => {
    setMovies((oldState) => {
      return {
        ...oldState,
        movies: [...oldState.films],
        loading: true,
        page: oldState.page
      }
    });

    await fetchMovies()
  }, [])

  const fetchMovies = async (search?: boolean, searchValue?: string) => { 
    let response: any;

    if (search!) { 
      const searchUrl = `search/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${searchValue!}&page=${movies.page}&include_adult=false`
      response = await api.get(searchUrl)
    } else {
      response = await api.get('movie/now_playing', {
        params: {
          api_key: MOVIE_DB_API_KEY,
          page: movies.page
        }
      })
    }

    const filteredMovies = filterMovies(response.data.results)

    setMovies((oldState) => {
      return {
        ...oldState,
        films: [...oldState.films, ...filteredMovies],
        loading: false,
        page: oldState.page + 1,
      }
    });
  }

  const filterMovies = (results: any[]) => {
    const moviesList = [] as IMovie[]
    results.forEach((movie: any, idx: any) => {
      moviesList.push({
        id: movie.id,
        name: movie.title,
        cover: movie.poster_path,
        rating: movie.vote_average,
      })
    })
    
    return moviesList
  }

  useEffect(() => {
    loadMovies()
  }, [loadMovies])


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
          textChanged={async (searchValue) => {
            setMoviesQuery(searchValue)
            setMovies((oldState) => { 
              return {
                films: [],
                loading: true,
                page: 1,
              }
            })
            if (searchValue.length) {
              await fetchMovies(true, searchValue)
            } else {
              await fetchMovies(false)
            }
          }}
        />
      </SearchContainer>
      {(movies.loading && !movies.films.length) 
        ? <LoadingContainer>
            <ActivityIndicator size="large" color={Colors.LightBlue} /> 
          </LoadingContainer>
        : <FlatList
            removeClippedSubviews
            data={movies.films}
            contentContainerStyle={{
              width: RFPercentage(42),
              paddingBottom: RFPercentage(30),
              flexDirection: 'column',
            }}
            ListFooterComponent={() => (
              <BottomLoadingContainer>
                <ActivityIndicator size="small" color={Colors.LightBlue} /> 
              </BottomLoadingContainer>
            )}
            onEndReached={async () => { await fetchMovies(!!moviesQuery.length, moviesQuery) }}
            numColumns={3}
            onEndReachedThreshold={0.1}
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
      />}
    </Container>
  )
}

export default Home;