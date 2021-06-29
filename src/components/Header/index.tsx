import React, { ReactNode } from "react";

import { Title, Content, WrapperBack, WrapperAction } from "./styles";

import { View } from "react-native";

import { Feather } from "@expo/vector-icons";
import {
    secondary30,
  secondary40,
  secondary70,
  textlight,
} from "../../global/constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {

  const navigation = useNavigation();

  const handleGoBack = () =>{
    navigation.goBack();
  }

  return (
    <LinearGradient colors={[secondary40, secondary70]}>
      <Content>
        <WrapperBack rippleColor={secondary30} onPress={handleGoBack}>
          <Feather name="arrow-left" color={textlight} size={24} />
        </WrapperBack>
        <Title>{title}</Title>
        {action && <WrapperAction>{action}</WrapperAction>}
      </Content>
    </LinearGradient>
  );
}
