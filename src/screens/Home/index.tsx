import React from "react";
import { Entypo } from "@expo/vector-icons";

import { Avatar } from "../../components/Avatar";
import { ButtonIcon } from "../../components/ButtonIcon";

import { Container } from "../../global/styles/common";
import { Head, Hello, WrapperName, Welcome, Name, Subtitle } from "./styles";
import { textlight } from "../../global/constants/colors";

export function Home() {
  return (
    <Container>
      <Head>
        <Avatar />

        <Hello>
          <WrapperName>
            <Welcome>Olá, </Welcome>
            <Name>Bruno</Name>
          </WrapperName>
          
          <Subtitle>Hoje é dia de vitória</Subtitle>
        </Hello>

        <ButtonIcon>
          <Entypo name="plus" size={24} color={textlight} />
        </ButtonIcon>
      </Head>
    </Container>
  );
}
