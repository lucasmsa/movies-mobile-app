import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowLeftSquare } from 'react-native-iconly'
import { Colors } from '../../types/Colors';

interface BackButtonProps {
  clicked: () => void;
}

const BackButton = ({ clicked }: BackButtonProps) => {
  return (
    <TouchableOpacity
      onPress={clicked}
    >
      <ArrowLeftSquare
        size={'xlarge'}
        set={'bulk'}
        primaryColor={Colors.LighterBlue} 
        secondaryColor={Colors.MediumBlue}
      />
    </TouchableOpacity>
)}

export default BackButton;