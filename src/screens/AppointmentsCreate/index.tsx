import React from "react";

import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

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
} from "./styles";

import { primary, secondary30, textlight } from "../../global/constants/colors";

import { Header } from "../../components/Header";
import { ListName } from "../../components/ListName";
import { CategorySelect } from "../../components/CategorySelect";
import { ContainerInputNumber } from "../../components/ContainerInputNumber";
import { BigButton } from "../../components/BigButton";

export function AppointmentsCreate() {
  return (
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
            <Select>
              <NoImage />
              <Body>
                <Label>Selecione um servidor</Label>
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
  );
}
