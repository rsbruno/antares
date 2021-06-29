import React from "react";

import { Container } from "../../global/styles/common";

import { Feather } from '@expo/vector-icons'; 

import {
  Form,Select,NoImage, Body, Label
} from "./styles";

import { primary, secondary30, textlight } from "../../global/constants/colors";

import { Header } from "../../components/Header";
import { ListName } from "../../components/ListName";
import { CategorySelect } from "../../components/CategorySelect";

export function AppointmentsCreate() {
 
  return (
    <Container>
      <Header
        title="Agendar Partida"
      />

      <ListName title="Categoria"/>
      <CategorySelect />

      <Form>
        <Select>
          <NoImage />
          <Body>
            <Label>Selecione um servidor</Label>
            <Feather name="chevron-right" size={24} color={textlight} />
          </Body>
        </Select>

      </Form>
    </Container>
  );
}
