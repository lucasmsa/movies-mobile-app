import React, { useState } from 'react'
import { Star } from 'react-native-iconly';
import { roundToHalf } from '../../utils/roundToHalf';
import { Container } from './styles';

interface StarProps {
  rating: number;
}

const Stars = ({ rating }: StarProps) => {
  const ratingStars = roundToHalf(rating / 2, 0.5)
  console.log('rating ', ratingStars)

  const fullStar= <Star size={14} set='bold' color={'#f5c544'}/>
  const emptyStar= <Star size={14} color={'#f5c544'}/>
  const halfStar = <Star size={14} set='bulk' color={'#f5c544'} />
  
  return (
    <Container>
      {[0, 1, 2, 3, 4].map((index) => { 
        if (ratingStars >= index + 1) {
          return fullStar
        } else if (ratingStars === index + 0.5) {
          return halfStar
        } else {
          return emptyStar
        }
      })}
      {/* <Stars
          default={roundToHalf(rating / 2, 0.5)}
          count={5}
          half={true}
          fullStar={<Star size={14} set='bold' color={'#f5c544'}/>}
          emptyStar={<Star size={14} color={'#f5c544'}/>}
          halfStar={<Star size={14} set='bulk' color={'#f5c544'} />}
      /> */}
    </Container>
  )
}

export default Stars;