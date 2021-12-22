import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Colors } from '../../types/Colors'

export const Container = styled.View`
  flex: 1;
  background: ${Colors.DarkBlue};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-between;
  height: ${RFPercentage(8)}px;
  margin-bottom: ${RFPercentage(2)}px;
`


export const HeaderText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${Colors.LighterBlue}
`

export const WebViewContainer = styled.View`
  display: flex;
  flex: 1;
`