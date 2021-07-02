import styled from 'styled-components/native';

import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.darkenGrey};
  align-items: center;
`

export const Button = styled.TouchableOpacity`
  padding: 15px 0;
  margin-bottom: 30px;
  background-color: ${colors.darkGrey};
  width: 75%;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.9) 0px 8px 90px;
`
export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
`
export const IconsContainer = styled.View`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  
`
