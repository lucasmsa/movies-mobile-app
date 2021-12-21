import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { Search, CloseSquare, ArrowRight} from 'react-native-iconly'
import { sub } from 'react-native-reanimated';
import { Colors } from '../../types/Colors';
import { ArrowRightIcon, BlankSquare, Container, IconContainer, IconsContainer, Input } from './styles';

interface SearchInputProps {
  submit: (text: string) => void;
}

const SearchInput = ({ submit }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <Container>
      <Search
        size={16}
        set={'curved'}
        color={Colors.LighterBlue}
      />
      <Input
        value={searchValue}
        placeholder='Search movies'
        onChangeText={(text: string) => {
          setSearchValue(text)
        }}
      />
      <IconsContainer>
        <IconContainer
          onPress={() => setSearchValue('')}
        >
          <CloseSquare 
            size={'large'}
            set={'bulk'} 
            primaryColor={searchValue.length ? Colors.LighterBlue : Colors.MediumBlue}
            secondaryColor={searchValue.length ? Colors.MediumBlue : Colors.MediumBlue}
          />
        </IconContainer>
        <IconContainer
          onPress={() => submit(searchValue)}
        >
          <ArrowRightIcon 
            size={'medium'} 
            set={'bulk'}
            primaryColor={Colors.LighterBlue} 
            secondaryColor={Colors.DarkBlue}
          />
        </IconContainer>
      </IconsContainer>
    </Container>
  )
}

export default SearchInput;