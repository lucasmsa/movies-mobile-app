import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import BackButton from '../../components/BackButton';
import MovieCard from '../../components/MovieCard';
import Search from '../../components/Search';
import { MOVIE_DB_API_KEY } from '../../constants/apiKey'; 
import { api } from '../../service/api';
import { Colors } from '../../types/Colors';
import { IMovie } from '../../types/IMovie';
import { Container, Header, HeaderWelcomeText, HeaderWelcome } from './styles';

interface DetailsProps {
  route: {
    params: {
      id: string;
    }
  }
}

const Details = ({ route }: DetailsProps) => {
  const id = route.params.id;
  const navigation = useNavigation()
  const [movie, setMovie] = useState<string>('');

  const loadMovies = useCallback(async () => {
    // setMovies((oldState) => {
    //   return {
    //     ...oldState,
    //     movies: [...oldState.films],
    //     loading: true,
    //     page: oldState.page
    //   }
    // });

    // await fetchMovies('', movies.page);
  }, [])

  const fetchMovies = async (searchValue?: string, page?: number) => { 
    // let response: any;
    
    // if (searchValue && searchValue.length) { 
    //   const searchUrl = `search/movie?api_key=${MOVIE_DB_API_KEY}&language=en-US&query=${searchValue!}&page=${page}&include_adult=false`
    //   response = await api.get(searchUrl)
    // } else {
    //   response = await api.get('movie/now_playing', {
    //     params: {
    //       api_key: MOVIE_DB_API_KEY,
    //       page: movies.page
    //     }
    //   })
    // }

    // if (response.data.total_pages <= movies.page) setLastPage(true)

    // const filteredMovies = filterMovies(response.data.results)

    // setMovies((oldState) => {
    //   return {
    //     ...oldState,
    //     films: [...oldState.films, ...filteredMovies],
    //     loading: false,
    //     page: oldState.page + 1,
    //   }
    // });
  }

  const filterMovies = (results: any[]) => {
    // const moviesList = [] as IMovie[]
    // results.forEach((movie: any, idx: any) => {
    //   moviesList.push({
    //     id: movie.id,
    //     name: movie.title,
    //     cover: movie.poster_path,
    //     rating: movie.vote_average,
    //   })
    // })
    
    // return moviesList
  }

  // useEffect(() => {
  //   loadMovies()
  // }, [loadMovies])


  return (
    <Container>
      <Header>
        <BackButton
          clicked={() => navigation.goBack()}
        />
        <HeaderWelcome>
          <HeaderWelcomeText>Welcome, Ivan Locke Little pussy { id }</HeaderWelcomeText>
        </HeaderWelcome>
      </Header>
    
    </Container>
  )
}

export default Details;