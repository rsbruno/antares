import React from "react";

import { ContainerInput,Input  } from "./styles";

export function InputNumber() {
  return (
    <ContainerInput>
      <Input keyboardType="numeric" maxLength={2} />
    </ContainerInput>
  );
}
