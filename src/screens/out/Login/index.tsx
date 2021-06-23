import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Container, Button, ButtonText, IconsContainer } from './styles';

import colors from '../../../styles/colors'

const logoImg = require('../../../assets/images/logo.png')

const fbLogo = require('../../../assets/images/fb-logo.png')
const googleLogo = require('../../../assets/images/google-logo.png')
const twitterLogo = require('../../../assets/images/tt-logo.png')

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
        <IconsContainer>
          <Image source={fbLogo} width={3} />
          <Image source={twitterLogo}/>
          <Image source={googleLogo}/>
        </IconsContainer>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey
  }
})