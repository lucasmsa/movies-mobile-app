import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Colors } from '../../types/Colors'

export const Container = styled.View`
  display: flex;
`

export const ProfilePicture = styled.Image`
  width: ${RFValue(42)}px;
  height: ${RFValue(42)}px;
  border-radius: ${RFValue(12)}px;
  margin-right: ${RFValue(12)}px;
`

export const HeaderWelcomeText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${Colors.LightBlue}
`

export const HeaderNameText = styled.Text`
  font-size: ${RFValue(16)}px;
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