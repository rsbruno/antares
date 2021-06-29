import { Fontisto } from "@expo/vector-icons";
import { FlatList } from "react-native";
import React from "react";

import {
  Container,
  ActionButton,
  Banner,
  Title,
  Description,
  WrapperText,
  ListUser,
} from "./styles";

import { primary, secondary30, textlight } from "../../global/constants/colors";
import BannerIMG from "../../assets/banner.png";

import { ListName } from "../../components/ListName";
import { Header } from "../../components/Header";
import { Player } from "../../components/Player";
import { DivisorLine } from "../../components/ListDivisor/styles";

export function AppointmentsDetails() {
  const users = [
    {
      id: "1",
      name: "Bruno",
      avatar: "http://github.com/rsbruno.png",
      status: 1
    },
    {
      id: "2",
      name: "Diego",
      avatar: "http://github.com/diego3g.png",
      status: 2
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
        ItemSeparatorComponent={()=><DivisorLine/>}
      />
    </Container>
  );
}
