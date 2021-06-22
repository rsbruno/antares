import React from 'react';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';

import { Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Rajdhani_400Regular, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';

import {SignIn} from './src/screens/SignIn'

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_500Medium,Inter_700Bold,
    Rajdhani_400Regular, Rajdhani_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 

  return (
    <SignIn />
  );
}

