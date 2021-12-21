import { ArrowRightSquare } from 'react-native-iconly'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Colors } from '../../types/Colors'

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: ${Colors.MediumBlue};
  width: ${RFPercentage(41)}px;
  height: ${RFPercentage(5)}px;
  padding-left: ${RFPercentage(2)}px;
  border-radius: ${RFPercentage(1.5)}px;
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: Colors.LightBlue,
    selectionColor: Colors.LighterBlue
  })`
  font-size: ${RFValue(12)}px;
  color: ${Colors.LighterBlue}
  width: ${RFPercentage(26)}px;
  margin-left: ${RFPercentage(2)}px;
`

export const BlankSquare = styled.View`
  width: ${RFPercentage(10)}px;
  height: ${RFPercentage(5)}px;
`

export const IconsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ArrowRightIcon = styled(ArrowRightSquare)`
  margin-left: ${RFPercentage(0.5)}px;
  margin-right: ${RFPercentage(1)}px;
`

export const IconContainer = styled.TouchableOpacity`
`