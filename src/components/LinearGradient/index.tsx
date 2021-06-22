import React,{ReactNode} from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient as Gradient } from "expo-linear-gradient";

type Props = {
    colors:Array<string>;
    children:ReactNode;
}

export function LinearGradient({colors,children}:Props) {
  return (
    <Gradient
      // Background Linear Gradient
      colors={colors}
      style={{flex:1}}
    >
      {children}
    </Gradient>
  );
}
