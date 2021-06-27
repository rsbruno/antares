import React from "react";

import { Container, Content, Image, WrapperImage } from "./styles";
import { LinearGradient } from "../LinearGradient";
import { secondary50, secondary60 } from "../../global/constants/colors";

import { View } from "react-native";

export function ImageCustom() {
  return (
    <Container>
      <LinearGradient colors={[secondary50, secondary60]}>
        <Content>
          <WrapperImage>
            <Image
              source={{
                uri: "https://pbs.twimg.com/media/EEtSbyFXYAA6yMg.jpg",
              }}
            />
          </WrapperImage>
        </Content>
      </LinearGradient>
    </Container>
  );
}
