import React, { ReactNode } from "react";

import { WrapperButton } from "./styles";

import {RectButtonProps} from "react-native-gesture-handler"

type Button = RectButtonProps & {
  children: ReactNode;
};

export function ButtonIcon({children, ...rest}:Button) {
  return <WrapperButton {...rest}>{children}</WrapperButton>;
}