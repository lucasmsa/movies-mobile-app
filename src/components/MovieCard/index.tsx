import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Search } from 'react-native-iconly'
import { Colors } from '../../types/Colors';
import { Container, MovieCover, MovieName } from './styles';
import Stars from 'react-native-stars';
import { Star } from 'react-native-iconly'
import { imageUrl } from '../../constants/mediaUrl';

interface MovieCardProps {
  name: string;
  cover: string;
  rating: number;
}

const MovieCard = ({ name, cover, rating }: MovieCardProps) => {
  console.log(imageUrl + cover)
  return (
  <Container>
    <MovieCover
      source={{uri: imageUrl + cover}}
    />
    <MovieName>The Last Duel</MovieName>
    
    <Stars
      default={rating/2}
      count={5}
      half={true}
      fullStar={<Star size={18} set='bold' color={'#f5c544'}/>}
      emptyStar={<Star size={18} color={'#f5c544'}/>}
      halfStar={<Star size={18} set='bulk' primaryColor={'#f5c544'} />}
    />
  </Container>
)}

export default MovieCard;