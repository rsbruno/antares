import React from "react";
import { FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { DivisorLine } from "../../components/ListDivisor/styles";
import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ListName } from "../../components/ListName";
import { Avatar } from "../../components/Avatar";

import { Container } from "../../global/styles/common";
import { Head, Hello, WrapperName, Welcome, Name, Subtitle} from "./styles";
import { textlight } from "../../global/constants/colors";
import { ListEmpty } from "../../components/ListEmpty";

const appointments = [
  {
    id: "1",
    guild: {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    category: "1",
    date: "22/06 às 20:40h",
    description:
      "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
  },
  {
    id: "2",
    guild: {
      id: "2",
      name: "Rumo á Vitória",
      icon: null,
      owner: false,
    },
    category: "2",
    date: "22/06 às 20:40h",
    description:
      "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
  },
  {
    id: "3",
    guild: {
      id: "3",
      name: "Bora queimar tudo",
      icon: null,
      owner: false,
    },
    category: "3",
    date: "22/06 às 20:40h",
    description:
      "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
  },
];

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

      <CategorySelect />

      <ListName title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return <Appointment data={item}/>
        }}
        ItemSeparatorComponent={()=> <DivisorLine />}
        ListEmptyComponent={()=><ListEmpty label="Nenhum compromisso a exibir"/>}
      />

    </Container>
  );
}
