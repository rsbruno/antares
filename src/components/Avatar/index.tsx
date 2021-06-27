import React from "react";

import { Text } from "react-native";
import { secondary40, secondary30, secondary60 } from "../../global/constants/colors";
import { Container } from "../../global/styles/common";
import { LinearGradient } from "../LinearGradient";
import { Wrapper, AvatarImg,Content } from "./styles";

export function Avatar() {
  return (
    <Wrapper>
      <LinearGradient colors={[secondary40, secondary30]}>
        <Content>
            <AvatarImg source={{ uri: "https://lh3.googleusercontent.com/ogw/ADea4I5QZtetOOBbAulTlXbaJ_5--n7ovn_2CrwNHRqSAw=s83-c-mo" }} />
        </Content>
      </LinearGradient>
    </Wrapper>
  );
}
