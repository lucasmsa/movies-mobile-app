import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { Colors } from '../types/Colors'

export const ApplicationContainer = styled.View`
  flex: 1;
  background: ${Colors.DarkBlue};
  padding-top: ${RFPercentage(8)}px;
  padding-left: ${RFPercentage(4)}px;
  padding-right: ${RFPercentage(4)}px;
  padding-bottom: ${RFPercentage(10)}px;
`