import 'react-native-gesture-handler';

import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';

import Routes from './src/routes/'

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
  });

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <Routes />
  );
}


