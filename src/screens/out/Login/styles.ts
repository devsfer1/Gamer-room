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
  width: 70%;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
`

export const IconsContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 60px;
`