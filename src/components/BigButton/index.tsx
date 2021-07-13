import React from "react";
import { useNavigation } from '@react-navigation/native';


import { Button, Label } from "./styles";

type ButtonIcon = {
  label: string;
};

export function BigButton({ label }: ButtonIcon) {

  const navigation = useNavigation();

  return (
    <Button onPress={()=>navigation.navigate("Home")}>
      <Label>{label}</Label>
    </Button>
  );
}
