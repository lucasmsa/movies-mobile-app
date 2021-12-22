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
`


export const HeaderText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${Colors.LighterBlue}
`

export const TrailerOrPosterContainer = styled.View`
  margin-top: ${RFPercentage(10)}px;
  margin-bottom: ${RFPercentage(8)}px;
  height: ${RFPercentage(35)}px;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${RFPercentage(4)}px;
`

export const Poster = styled.ImageBackground.attrs({
  borderRadius: RFPercentage(2),
})`
  width: ${RFPercentage(25)}px;
  height: ${RFPercentage(35)}px;
  align-self: center;
  align-items: center;
  justify-content: center;
`

export const PlayContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  flex: 1;
  align-self: center;
  align-items: center;
  justify-content: center;
`

export const MovieInfoContainer = styled.View`
  margin-top: ${RFPercentage(3)}px;
  align-self: center;
  flex-direction: column;
`

export const MovieName = styled.Text.attrs({
  numberOfLines: 2,
  ellipsizeMode: 'tail'
})`
  text-align: center;
  font-size: ${RFValue(16)}px;
  max-width: ${RFPercentage(32)}px;
  color: ${Colors.LighterBlue};
  align-self: center;
`

export const MovieDetailsContainer = styled.View`
  margin-top: ${RFPercentage(2)}px;
  flex-direction: row;
  justify-content: space-between;
  width: ${RFPercentage(28)}px;
  align-self: center;
`

export const ReleaseYearText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${Colors.LighterBlue}
`

export const GenreAndRuntimeText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${Colors.LightBlue}
`

export const RatingContainer = styled.View`
  margin-top: ${RFPercentage(3)}px;
  width ${RFPercentage(40)}px;
  flex-direction: row;
  align-self: center;
  align-items: center;
`

export const RatingText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${Colors.LightBlue}
  margin-left: ${RFPercentage(2)}px;
  letter-spacing: ${RFPercentage(0.3)}px;
`

export const HighlightedRatingText = styled.Text`
  color: ${Colors.Yellow};
  font-weight: bold;
  margin-right: ${RFPercentage(2)}px;
  font-size: ${RFValue(16)}px;
`

export const DescriptionContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  persistentScrollbar: true
})`
  margin-top: ${RFPercentage(4)}px;
  width: ${RFValue(272)}px;
  height: ${RFValue(50)}px;
  align-self: center;
`

export const DescriptionText = styled.Text.attrs({
  ellipsizeMode: 'tail',
  })`
  text-align: center;
  width: ${RFValue(256)}px;
  font-size: ${RFValue(14)}px;
  color: ${Colors.LightBlue};
`