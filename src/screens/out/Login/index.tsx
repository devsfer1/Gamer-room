import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image ,
} 
from 'react-native';

import { Container, Button, ButtonText, IconsContainer } from './styles';

import colors from '../../../styles/colors'

const logoImg = require('../../../assets/images/logo.png')

const fbLogo = require ('../../../assets/images/fb-logo.png')
const googleLogo = require('../../../assets/images/google-logo.png')
const twitterLogo = require('../../../assets/images/tt-logo.png')

export function LoginPage() {
  return (
    <>
    <Container>
      <Image source={logoImg} style={{ width: 400, height: 450 }}/>
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
          <Image source={fbLogo} style={{ width: 80, height: 80 }} />
          <Image source={twitterLogo} style={{ width: 80, height: 80 }} />
          <Image source={googleLogo} style={{ width: 80, height: 80 }} />
        </IconsContainer>
        
    </Container>
    </>
    
  )
}
