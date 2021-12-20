import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Colors } from '../../types/Colors'

export const Container = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${Colors.MediumBlue};
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(5)}px;
  padding-left: ${RFPercentage(2)}px;
  border-radius: ${RFPercentage(1.5)}px;
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: Colors.LightBlue
  })`
  font-size: ${RFValue(12)}px;
  margin-left: ${RFPercentage(2)}px;
  color: ${Colors.LighterBlue}
  width: ${RFPercentage(32)}px;
`