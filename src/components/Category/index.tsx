import React from "react";

import { Button, WrapperContent, Content, Label, Main } from "./styles";

import { LinearGradient } from "../LinearGradient";
import {
  secondary50,
  secondary60,
  secondary40,
} from "../../global/constants/colors";

type Props = {
  category: {
    id: number;
    title: string;
    icon: any;
  };
};

export function Category({ category }: Props) {
  const { title, icon: Icon } = category;

  return (
    <Button>
      <LinearGradient colors={[secondary50, secondary60]}>
        <WrapperContent>
          <Content>
            <LinearGradient colors={[secondary40, secondary60]}>
              <Main>
                <Icon width={48} height={48} />
                <Label>{title}</Label>
              </Main>
            </LinearGradient>
          </Content>
        </WrapperContent>
      </LinearGradient>
    </Button>
  );
}
