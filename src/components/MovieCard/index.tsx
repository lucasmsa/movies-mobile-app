import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Search } from 'react-native-iconly'
import { Colors } from '../../types/Colors';
import { Container, MovieCover, MovieName, StarsContainer } from './styles';
import Stars from 'react-native-stars';
import { Star } from 'react-native-iconly'
import { imageUrl } from '../../constants/mediaUrl';
import { roundToHalf } from '../../utils/roundToHalf';

interface MovieCardProps {
  name: string;
  cover: string;
  rating: number;
}

const MovieCard = ({ name, cover, rating }: MovieCardProps) => {
  return (
  <Container>
    <MovieCover
      source={{uri: imageUrl + cover}}
    />
    <MovieName>{ name }</MovieName> 
    <StarsContainer>
      <Stars
        default={roundToHalf(rating/2, 0.5)}
        count={5}
        half={true}
        fullStar={<Star size={14} set='bold' color={'#f5c544'}/>}
        emptyStar={<Star size={14} color={'#f5c544'}/>}
        halfStar={<Star size={14} set='bulk' color={'#f5c544'} />}
      />
    </StarsContainer>
  </Container>
)}

export default MovieCard;