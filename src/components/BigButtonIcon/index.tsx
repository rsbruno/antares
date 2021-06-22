import React from "react";
import { useNavigation } from '@react-navigation/native';


import { BigButton, Icon, Label, WrapperIcon } from "./styles";

type ButtonIcon = {
  label: string;
  icon: any;
};

export function BigButtonIcon({ label, icon }: ButtonIcon) {

  const navigation = useNavigation();

  return (
    <BigButton onPress={()=>navigation.navigate("Home")}>
      <WrapperIcon>
        <Icon source={icon} />
      </WrapperIcon>
      <Label>{label}</Label>
    </BigButton>
  );
}
