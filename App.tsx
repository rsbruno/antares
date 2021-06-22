import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { Inter_500Medium, Inter_400Regular } from "@expo-google-fonts/inter";
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";
import * as colors from './src/global/constants/colors'

import { SignIn } from "./src/screens/SignIn";
import { LinearGradient } from "./src/components/LinearGradient";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient colors={[colors.secondary80, colors.secondary100]}>
      <SignIn />

    </LinearGradient>
  );
}
