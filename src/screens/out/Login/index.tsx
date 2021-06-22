import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Container, Button, ButtonText } from './styles';

import colors from '../../../styles/colors'

const logoImg = require('../../../assets/images/logo.png')

export function LoginPage() {
  return (
    <Container>
      <Image source={logoImg} width={10}/>
      <Button >
        <ButtonText>
          LOGIN
        </ButtonText>
      </Button>
      <Button >
        <ButtonText>
          REGISTER NOW
        </ButtonText>
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey
  }
})