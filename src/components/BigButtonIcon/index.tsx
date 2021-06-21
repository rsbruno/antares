import React from "react";

import { BigButton, Icon, Label, WrapperIcon } from "./styles";

type ButtonIcon = {
  label: string;
  icon: any;
};

export function BigButtonIcon({ label, icon }: ButtonIcon) {
  return (
    <BigButton>
      <WrapperIcon>
        <Icon source={icon} />
      </WrapperIcon>
      <Label>{label}</Label>
    </BigButton>
  );
}
