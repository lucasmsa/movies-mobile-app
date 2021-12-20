import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Search } from 'react-native-iconly'
import { Colors } from '../../types/Colors';
import { Container, Input } from './styles';

interface SearchInputProps {
  textChanged: (text: string) => void;
}

const SearchInput = ({textChanged}: SearchInputProps) => (
  <Container>
    <Search
      size={16}
      set={'curved'}
      color={Colors.LighterBlue}
    />
    <Input
      placeholder='Search movies'
      onChangeText={textChanged}
    />
  </Container>
)

export default SearchInput;