import React from "react";

import { Container,ActionButton } from "./styles";

import { Header } from "../../components/Header";

import { Fontisto } from "@expo/vector-icons";
import { primary, secondary30, textlight } from "../../global/constants/colors";

export function AppointmentsDetails() {
  return (
    <Container>
      <Header
        title="Detalhes"
        action={
          <ActionButton 
            rippleColor={secondary30}
          >
            <Fontisto name="share" color={primary} size={18} />
          </ActionButton>
        }
      />
    </Container>
  );
}
