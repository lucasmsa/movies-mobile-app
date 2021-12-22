import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import MovieCard from '../../components/MovieCard';
import Search from '../../components/Search';
import { MOVIE_DB_API_KEY } from '../../constants/apiKey'; 
import { api } from '../../service/api';
import { Colors } from '../../types/Colors';
import { IMovie } from '../../types/IMovie';
import { Container, Header, HeaderWelcomeText, HeaderWelcome, ProfilePicture, HeaderNameText, SearchContainer, MoviesContainer, StyledFlatList, LoadingContainer, BottomLoadingContainer, NotFoundContainer, NotFoundText } from './styles';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [lastPage, setLastPage] = useState<boolean>(false);
  const [moviesQuery, setMoviesQuery] = useState<string>('');
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

    await fetchMovies('', movies.page);
  }, [])

  const fetchMovies = async (searchValue?: string, page?: number) => { 
    let response: any;
    
    if (searchValue && searchValue.length) { 
      const searchUrl = `search/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${searchValue!}&page=${page}&include_adult=false`
      response = await api.get(searchUrl)
    } else {
      response = await api.get('movie/now_playing', {
        params: {
          api_key: MOVIE_DB_API_KEY,
          page: movies.page
        }
      })
    }

    if (response.data.total_pages <= movies.page) setLastPage(true)

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
  }, [loadMovies, navigation])


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
          submit={async (text: string) => {
            setMoviesQuery(text)
            setLastPage(false)
            setMovies((oldState) => { 
              return {
                ...oldState,
                films: [],
                loading: true,
                page: 1,
              }
            })
            if (text.length) {
              await fetchMovies(text, 1)
            } else {
              await loadMovies()
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
            maxToRenderPerBatch={20}
            data={movies.films}
            contentContainerStyle={{
              width: RFPercentage(42),
              paddingBottom: RFPercentage(30),
              flexDirection: 'column',
            }}
            ListFooterComponent={() => (
              movies.films.length ? (
                (lastPage ? <></> : <BottomLoadingContainer>
                                    <ActivityIndicator size="small" color={Colors.LightBlue} /> 
                                  </BottomLoadingContainer>)
              ) : (
                <NotFoundContainer>
                  <NotFoundText>Ooops... No movies with that name were found</NotFoundText>
                </NotFoundContainer>
              )
            )}
            onEndReached={async () => {
              await fetchMovies(moviesQuery, movies.page)
            }}
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
                  clicked={() => {
                    navigation.navigate('Details' as never, { id } as never)
                  }}
            />
          )
        }}
      />}
    </Container>
  )
}

export default Home;