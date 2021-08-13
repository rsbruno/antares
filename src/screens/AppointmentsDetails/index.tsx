import React from "react";

import { Container } from "../../global/styles/common";
import { Fontisto } from "@expo/vector-icons";
import { FlatList } from "react-native";

import {
  ActionButton,
  Banner,
  Title,
  Description,
  WrapperText,
  Footer,
} from "./styles";

import { primary, secondary30 } from "../../global/constants/colors";
import BannerIMG from "../../assets/banner.png";

import { DivisorLine } from "../../components/ListDivisor/styles";
import { BigButtonIcon } from "../../components/BigButtonIcon";
import { ListName } from "../../components/ListName";
import { Header } from "../../components/Header";
import { Player } from "../../components/Player";

export function AppointmentsDetails() {
  const users = [
    {
      id: "1",
      name: "Bruno",
      avatar: "http://github.com/rsbruno.png",
      status: 1,
    },
    {
      id: "2",
      name: "Bruno R Santos",
      avatar: "http://github.com/rsbruno.png",
      status: 2,
    },
  ];

  return (
    <Container>
      <Header
        title="Detalhes"
        action={
          <ActionButton rippleColor={secondary30}>
            <Fontisto name="share" color={primary} size={18} />
          </ActionButton>
        }
      />

      <Banner source={BannerIMG}>
        <WrapperText>
          <Title>Lendários</Title>
          <Description>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Description>
        </WrapperText>
      </Banner>

      <ListName title="Jogadores" subtitle={`total ${users.length}`} />

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Player data={item} />;
        }}
        ItemSeparatorComponent={() => <DivisorLine />}
        contentContainerStyle={{}}
      />

      <Footer>
        <BigButtonIcon
          icon={require("../../assets/discord.png")}
          label="Entrar na partida"
        />
      </Footer>
    </Container>
  );
}
