import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image ,
  Flex
} 
from 'react-native';

import { Container, Button, ButtonText, IconsContainer } from './styles';

import colors from '../../../styles/colors'

const logoImg = require('../../../assets/images/logo.png')

const fbLogo = require('../../../assets/images/fb-logo.png')
const googleLogo = require('../../../assets/images/google-logo.png')
const twitterLogo = require('../../../assets/images/tt-logo.png')

export function LoginPage() {
  return (
    <>
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
      <Flex>
        <Image source={fbLogo} width={100} />
        <Image source={twitterLogo} width={100} />
        <Image source={googleLogo}/>
      </Flex>   
    </Container>
    </>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey
  }
})