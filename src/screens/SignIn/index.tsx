import { StatusBar } from "expo-status-bar";
import React from "react";

import { BigButtonIcon } from "../../components/BigButtonIcon";

import colors from "../../global/constants/colors";
import { Container, Title } from "../../global/styles/common";

import { WrapperMain, Banner, Subitle, WrapperButton } from "./styles";

export function SignIn() {
  return (
    <Container background={colors.primaryApp}>
      <Banner source={require("../../assets/illustration.png")} />

      <WrapperMain>
        <Title color={colors.textLight} size={40}>
          Conecte-se {"\n"}e organize suas {"\n"}
          jogatinas
        </Title>

        <Subitle>
          Crie grupos para jogar seus games{"\n"}
          favoritos com seus amigos
        </Subitle>

        <WrapperButton>
          <BigButtonIcon
            label="Entrar com Discord"
            icon={require("../../assets/discord.png")}
          />
        </WrapperButton>
      </WrapperMain>

      <StatusBar style="light" translucent hidden />
    </Container>
  );
}
