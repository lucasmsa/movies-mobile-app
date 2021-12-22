import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Search } from 'react-native-iconly'
import { Colors } from '../../types/Colors';
import { Container, MovieCover, MovieName, StarsContainer } from './styles';
import { Star } from 'react-native-iconly'
import { imageUrl } from '../../constants/mediaUrl';
import { roundToHalf } from '../../utils/roundToHalf';
import Stars from '../Stars';

interface MovieCardProps {
  name: string;
  cover: string;
  rating: number;
  clicked: () => void;
}

const MovieCard = ({ name, cover, rating, clicked }: MovieCardProps) => {
  return (
    <Container
      onPress={clicked}
    >
    <MovieCover
      source={cover ? {uri: imageUrl + cover} : require('../../../assets/images/movie_cover_not_found.png')}
    />
    <MovieName>{ name }</MovieName> 
    <StarsContainer>
      <Stars
        rating={rating}
      />
    </StarsContainer>
  </Container>
)}

export default MovieCard;