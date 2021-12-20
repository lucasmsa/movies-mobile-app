import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Colors } from '../../types/Colors'

export const Container = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  // background: lightgreen;
  width: ${RFPercentage(16)}px;
  height: ${RFPercentage(24)}px;
  border-radius: ${RFPercentage(1.5)}px;
`

export const MovieName = styled.Text`
  margin-top: ${RFPercentage(1)}px;
  margin-bottom: ${RFPercentage(1)}px;
  font-size: ${RFValue(10)}px;
  color: ${Colors.LighterBlue}
`

export const MovieCover = styled.Image`
  width: ${RFPercentage(12)}px;
  height: ${RFPercentage(18)}px;
  border-radius: ${RFPercentage(1.5)}px;
`