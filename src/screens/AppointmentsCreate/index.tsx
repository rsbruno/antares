import React, { useState } from "react";

import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";

import { Container } from "../../global/styles/common";

import { Feather } from "@expo/vector-icons";

import {
  Form,
  Select,
  NoImage,
  Body,
  Label,
  WrapperImputs,
  TextArea,
  Footer,
  WrapperModal,
  ContentModal,
  Bar,
} from "./styles";

import {
  primary,
  secondary100,
  secondary30,
  secondary80,
  textlight,
} from "../../global/constants/colors";

import { Header } from "../../components/Header";
import { ListName } from "../../components/ListName";
import { CategorySelect } from "../../components/CategorySelect";
import { ContainerInputNumber } from "../../components/ContainerInputNumber";
import { BigButton } from "../../components/BigButton";
import { GuildProps, Guilds } from "../Guilds";
import { LinearGradient } from "../../components/LinearGradient";
import { ImageCustom } from "../../components/ImageCustom";

export function AppointmentsCreate() {
  const [visibleModal, setVisibleModal] = useState(false);

  const [guild,setGuild] = useState<GuildProps>({} as GuildProps);

  const openModal = () => {
    Keyboard.dismiss();
    setVisibleModal(true);
  };

  const selectGuild = (guild:GuildProps) =>{
    setVisibleModal(false);
    setGuild(guild);
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <Container>
            <Header title="Agendar Partida" />

            <ListName title="Categoria" />
            <CategorySelect />

            <Form>
              <Select onPress={openModal}>
                {guild.icon?<ImageCustom source={guild.icon}/>:<NoImage />}
                <Body>
                  <Label>
                    {guild.name || "Selecione um servidor"}
                  </Label>
                  <Feather name="chevron-right" size={24} color={textlight} />
                </Body>
              </Select>

              <WrapperImputs>
                <ContainerInputNumber title="Dia e mês" separator="/" />
                <ContainerInputNumber title="Horário" separator=":" />
              </WrapperImputs>

              <ListName title="Descrição" subtitle="Max 100 caracteres" />
              <TextArea multiline numberOfLines={4} />

              <Footer>
                <BigButton label="Agendar" />
              </Footer>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal transparent visible={visibleModal} animationType="slide">
        <WrapperModal>
          <ContentModal>
            <LinearGradient colors={[secondary80, secondary100]}>
              <Bar />
              <Guilds selectGuild={selectGuild} />
            </LinearGradient>
          </ContentModal>
        </WrapperModal>
      </Modal>
    </>
  );
}
