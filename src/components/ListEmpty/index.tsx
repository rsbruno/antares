import React from "react";

import { Container, Label } from "./styles";

type ListEmpryProps = {
  label: string;
};

export function ListEmpty({ label }: ListEmpryProps) {
  return label ? (
    <Container>
      <Label>{label}</Label>
    </Container>
  ) : (
    <></>
  );
}
