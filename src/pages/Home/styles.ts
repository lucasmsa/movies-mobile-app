import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Colors } from '../../types/Colors'

export const Container = styled.View`
  display: flex;
`

export const ProfilePicture = styled.Image`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  border-radius: ${RFValue(28)}px;
  margin-right: ${RFValue(12)}px;
`

export const HeaderWelcomeText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${Colors.LightBlue}
`

export const SearchContainer = styled.View`
  margin-top: ${RFValue(24)}px;
  margin-bottom: ${RFValue(36)}px;
`

export const HeaderNameText = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${Colors.LighterBlue}
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