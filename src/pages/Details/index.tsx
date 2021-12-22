import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import { InfoSquare } from 'react-native-iconly';
import { RFPercentage } from 'react-native-responsive-fontsize';
import BackButton from '../../components/BackButton';
import MovieCard from '../../components/MovieCard';
import Search from '../../components/Search';
import Stars from '../../components/Stars';
import { MOVIE_DB_API_KEY } from '../../constants/apiKey'; 
import { api } from '../../service/api';
import { Colors } from '../../types/Colors';
import { IMovie } from '../../types/IMovie';
import { minutesToHoursAndMinutes } from '../../utils/minutesToHoursAndMinutes';
import { Container, DescriptionContainer, DescriptionText, GenreAndRuntimeText, Header, HeaderText, HighlightedRatingText, MovieDetailsContainer, MovieInfoContainer, MovieName, Poster, RatingContainer, RatingText, ReleaseYearText, TrailerOrPosterContainer } from './styles';

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
  const [videoLink, setVideoLink] = useState<string>('');

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
        <HeaderText>Detail</HeaderText> 
        <InfoSquare 
          size={40} 
          set="light" 
          primaryColor={Colors.MediumBlue}
          secondaryColor={Colors.DarkBlue}
        />
      </Header>
      <TrailerOrPosterContainer>
        {videoLink ? <></> :
          (<Poster
            source={{ url: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg' }}
            />)
        }
        <MovieInfoContainer>
          <MovieName>Spider-Man: No Way Home</MovieName>
          <MovieDetailsContainer>
            <ReleaseYearText>2021</ReleaseYearText>
            <GenreAndRuntimeText>Action</GenreAndRuntimeText>
            <GenreAndRuntimeText>{minutesToHoursAndMinutes(148)}</GenreAndRuntimeText>
          </MovieDetailsContainer>
          <RatingContainer>
            <Stars rating={8.5} />
            <RatingText><HighlightedRatingText>{8.5}</HighlightedRatingText>/10</RatingText>
          </RatingContainer>
        </MovieInfoContainer>
      </TrailerOrPosterContainer>
      <DescriptionContainer>
        <DescriptionText>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.</DescriptionText>
      </DescriptionContainer>
    </Container>
  )
}

export default Details;