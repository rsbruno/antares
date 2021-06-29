import React from "react";

import { Container, Content, Image, WrapperImage } from "./styles";
import { LinearGradient } from "../LinearGradient";
import { secondary50, secondary60 } from "../../global/constants/colors";

import { View } from "react-native";

type ImageCustomProps = {
  source?: string;
};

export function ImageCustom({ source }: ImageCustomProps) {
  return (
    <Container>
      <LinearGradient colors={[secondary50, secondary60]}>
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
