import { FlatList } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Colors } from '../../types/Colors'
import { IMovie } from '../../types/IMovie'

export const Container = styled.View`
  display: flex;
`

export const ProfilePicture = styled.Image`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(28)}px;
  margin-right: ${RFValue(12)}px;
`

export const LoadingContainer = styled.View`
  height: ${RFPercentage(70)}px;
  width: ${RFPercentage(42)}px;
  align-items: center;
  justify-content: center;
`

export const BottomLoadingContainer = styled.View`
  margin-top: ${RFPercentage(1)}px;
  width: ${RFPercentage(42)}px;
  align-items: center;
  justify-content: center;
`

export const HeaderWelcomeText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${Colors.LightBlue}
`

export const SearchContainer = styled.View`
  margin-top: ${RFValue(24)}px;
  margin-bottom: ${RFValue(36)}px;
`

export const MoviesContainer = styled.View`
  height: ${RFPercentage(70)}px;
  width: ${RFPercentage(42)}px;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
`

export const HeaderNameText = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${Colors.LighterBlue}
`

export const NotFoundText = styled.Text`
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: ${Colors.LighterBlue}
`

export const NotFoundContainer = styled.Text`
  margin-top: ${RFPercentage(6)}px;
  width: ${RFPercentage(42)}px;
  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const HeaderWelcome = styled.View`
  display: flex;
  flex-direction: column;
`

export const StyledFlatList = styled(FlatList as new () => FlatList<IMovie>)`
  background-color: #f7f7f7;
`