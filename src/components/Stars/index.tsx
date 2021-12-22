import React from 'react'
import { Star } from 'react-native-iconly';
import { Colors } from '../../types/Colors';
import { roundToHalf } from '../../utils/roundToHalf';
import { Container } from './styles';

interface StarProps {
  rating: number;
}

const Stars = ({ rating }: StarProps) => {
  const ratingStars = roundToHalf(rating / 2, 0.5)

  const fullStar = (key: number) => <Star key={key} size={14} set='bold' color={Colors.Yellow}/>
  const emptyStar = (key: number) => <Star key={key} size={14} color={Colors.Yellow}/>
  const halfStar  = (key: number) => <Star key={key} size={14} set='bulk' color={Colors.Yellow} />
  
  return (
    <Container>
      {[0, 1, 2, 3, 4].map((index) => { 
        if (ratingStars >= index + 1) {
          return fullStar(index)
        } else if (ratingStars === index + 0.5) {
          return halfStar(index)
        } else {
          return emptyStar(index)
        }
      })}
    </Container>
  )
}

export default Stars;