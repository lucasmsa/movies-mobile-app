import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Colors } from '../../types/Colors'

export const Container = styled.View`
  flex: 1;
  background: ${Colors.DarkBlue};
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

export const HeaderWelcomeText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${Colors.LightBlue}
`
