import React from "react";

import { Container, Content, Image, WrapperImage } from "./styles";
import { LinearGradient } from "../LinearGradient";
import { secondary50, secondary60 } from "../../global/constants/colors";

import { View } from "react-native";

type ImageCustomProps = {
  source?: string;
  noBorder?:boolean; //Por padrão é falso, pois é uma negação de quero borda
};

export function ImageCustom({ source, noBorder = false}: ImageCustomProps) {

  const transparent = ["transparent","transparent"]

  return (
    <Container>
      <LinearGradient colors={noBorder?transparent:[secondary50,secondary60]}>
        <Content>
          <WrapperImage>
            <Image
              source={{
                uri: source
                  ? source
                  : "https://pbs.twimg.com/media/EEtSbyFXYAA6yMg.jpg",
              }}
            />
          </WrapperImage>
        </Content>
      </LinearGradient>
    </Container>
  );
}
