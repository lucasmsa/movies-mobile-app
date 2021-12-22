import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Colors } from '../../types/Colors'

export const Container = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: ${RFPercentage(14)}px;
  height: ${RFPercentage(20)}px;
  margin-bottom: ${RFPercentage(2.5)}px;
  border-radius: ${RFPercentage(1.5)}px;
`

export const MovieName = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail'
})`
  margin-top: ${RFPercentage(1)}px;
  margin-bottom: ${RFPercentage(1)}px;
  text-align: center;
  font-size: ${RFValue(10)}px;
  color: ${Colors.LighterBlue}
`

export const MovieCover = styled.Image`
  width: ${RFPercentage(8)}px;
  height: ${RFPercentage(12)}px;
  border-radius: ${RFPercentage(1.5)}px;
`

export const StarsContainer = styled.View`
`