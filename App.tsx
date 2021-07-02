import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';

import { LoginPage } from './src/screens/out/Login'

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
  });

  if(!fontsLoaded)
    return <AppLoading />

  return (
    <>
    <LoginPage />
    </>
  );
}

