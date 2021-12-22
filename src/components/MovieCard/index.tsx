import React from 'react'
import { Container, MovieCover, MovieName, StarsContainer } from './styles';
import { imageUrl } from '../../constants/mediaUrl';
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