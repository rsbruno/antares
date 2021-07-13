import React from "react";

import { ListDivisor } from "../../components/ListDivisor";
import { ListEmpty } from "../../components/ListEmpty";
import { FlatList } from "react-native";

import {
  Container,
  WrapperGuild,
  Body,
  Title,
  Subtitle,
  Button,
} from "./styles";

import { ImageCustom } from "../../components/ImageCustom";

import { Feather } from "@expo/vector-icons";
import { textlight } from "../../global/constants/colors";

export type GuildProps = {
  id: string;
  name: string;
  icon: any;
  owner: boolean;
};

type Props = {
  selectGuild: (guild: GuildProps) => void;
};

export function Guilds({ selectGuild }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Valorosos",
      icon: "https://www.imcgrupo.com/wp-content/uploads/2021/04/Valorant-Ultimate-Characters-Tier-List-16-1200x900.jpg",
      owner: true,
    },
    {
      id: "2",
      name: "Lendários",
      icon: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/bb8d724c-9aa2-11e6-9b10-00163ec9f5fa/2766737171/gta-v-cover-wallpaper-screenshot.jpg",
      owner: false,
    },
    {
      id: "3",
      name: "Quebra tudo",
      icon: "https://wiki.gcdn.co/images/thumb/7/7b/2016_WoWS_Key_Art.png/300px-2016_WoWS_Key_Art.png",
      owner: true,
    },
  ];

  return (
    <Container>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Button onPress={() => selectGuild(item)}>
              <WrapperGuild>
                <ImageCustom source={item.icon} />
                <Body>
                  <Title>{item.name}</Title>
                  <Subtitle>
                    {item.owner ? "Administrador" : "Convidado"}
                  </Subtitle>
                </Body>
                <Feather name="chevron-right" size={18} color={textlight} />
              </WrapperGuild>
            </Button>
          );
        }}
        ItemSeparatorComponent={() => <ListDivisor />}
        ListEmptyComponent={() => (
          <ListEmpty label="Nenhum Servidor Encontrado" />
        )}
      />
    </Container>
  );
}
