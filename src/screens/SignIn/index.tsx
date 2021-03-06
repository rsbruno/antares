import { StatusBar } from "expo-status-bar";
import React from "react";

import { BigButtonIcon } from "../../components/BigButtonIcon";

import * as colors from "../../global/constants/colors";
import { title700 } from "../../global/constants/fonts";
import { Container, Title } from "../../global/styles/common";
import { useAuth } from "../../hooks/auth";

import { WrapperMain, Banner, Subitle, WrapperButton } from "./styles";

export function SignIn() {

  const { user } = useAuth();

  console.log(user);


  return (
    <Container background={"transparent"}>
      <Banner source={require("../../assets/illustration.png")} />

      <WrapperMain>
        <Title color={colors.textlight} size={40} font={title700} lineheight={40}>
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
    </Container>
  );
}
