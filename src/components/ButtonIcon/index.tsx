import React, { ReactNode } from "react";

import { WrapperButton } from "./styles";

type Button = {
  children: ReactNode;
};

export function ButtonIcon({children}:Button) {
  return <WrapperButton>{children}</WrapperButton>;
}