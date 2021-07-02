import styled from 'styled-components/native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.darkenGrey};
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  padding: 15px 0;
  margin-bottom: 20px;
  background-color: ${colors.darkGrey};
  width: 85%;
  text-align: center;
  border-radius: 10px;
`
export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: ${fonts.text};
`
export const IconsContainer = styled.View`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  
`
