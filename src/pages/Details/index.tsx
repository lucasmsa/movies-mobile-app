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
import { imageUrl, videoUrls } from '../../constants/mediaUrl';
import { api } from '../../service/api';
import { Colors } from '../../types/Colors';
import { IMovie } from '../../types/IMovie';
import { getReleaseYear } from '../../utils/getReleaseYear';
import { minutesToHoursAndMinutes } from '../../utils/minutesToHoursAndMinutes';
import { Container, DescriptionContainer, DescriptionText, GenreAndRuntimeText, Header, HeaderText, HighlightedRatingText, MovieDetailsContainer, MovieInfoContainer, MovieName, Poster, RatingContainer, RatingText, ReleaseYearText, TrailerOrPosterContainer } from './styles';

interface DetailsProps {
  route: {
    params: {
      id: string;
    }
  }
}

interface IMovieDetails {
  name: string;
  genre: string;
  poster: string;
  description: string;
  rating: number;
  duration: string;
  releaseYear: number;
  trailer: string;
}

const Details = ({ route }: DetailsProps) => {
  const id = route.params.id;
  const navigation = useNavigation()
  const [movie, setMovie] = useState<IMovieDetails>({
    name: '',
    genre: '',
    poster: '',
    description: '',
    releaseYear: 0,
    duration: '',
    rating: 0,
    trailer: '',
  });
  const [videoLink, setVideoLink] = useState<string>('');

  const loadMovieDetails = useCallback(async () => {
    let response: any;
    
    const movieDetailshUrl = `movie/${id}?api_key=${MOVIE_DB_API_KEY}&language=en-US&append_to_response=videos`
    response = await api.get(movieDetailshUrl)

    const filteredMovieDetails = filterMovies(response.data)

    setMovie(filteredMovieDetails)

    console.log('sou o filmoso,', movie)
  }, [])

  const filterMovies = (result: any) => {
    const movieDetailsObject = {
      name: result.title,
      description: result.overview,
      rating: result.vote_average,
      genre: result.genres[0].name,
      releaseYear: getReleaseYear(result.release_date),
      poster: imageUrl + result.poster_path,
      duration: minutesToHoursAndMinutes(result.runtime),
      trailer: ''
    } as IMovieDetails

    if (result.videos.results.length && result.videos.results[0].site in videoUrls) {
      movieDetailsObject.trailer = videoUrls[result.videos.results[0].site] + result.videos.results[0].key
    }
    console.log('sou o objecto,', movieDetailsObject)
    return movieDetailsObject
  }

  useEffect(() => {
    loadMovieDetails()
  }, [loadMovieDetails])


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
      {movie.name ? (<><TrailerOrPosterContainer>
        {videoLink ? <></> :
          (<Poster
            source={movie.poster ? {uri: imageUrl + movie.poster} : require('../../../assets/images/movie_cover_not_found.png')}
            />)
        }
        <MovieInfoContainer>
          <MovieName>{ movie.name }</MovieName>
          <MovieDetailsContainer>
            <ReleaseYearText>{ movie.releaseYear }</ReleaseYearText>
            <GenreAndRuntimeText>{ movie.genre }</GenreAndRuntimeText>
            <GenreAndRuntimeText>{ movie.duration }</GenreAndRuntimeText>
          </MovieDetailsContainer>
          <RatingContainer>
            <Stars rating={ movie.rating } />
            <RatingText><HighlightedRatingText>{movie.rating}</HighlightedRatingText>/10</RatingText>
          </RatingContainer>
        </MovieInfoContainer>
      </TrailerOrPosterContainer>
      <DescriptionContainer>
        <DescriptionText>{ movie.description }</DescriptionText>
      </DescriptionContainer></>) : <ActivityIndicator size="large" color={Colors.MediumBlue} />}
    </Container>
  )
}

export default Details;