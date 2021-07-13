import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { text400, title700 } from "../../global/constants/fonts";

export const Container = styled.View`
  flex: 1;
  margin-top: 103px;
`;

export const Button = styled.TouchableOpacity``;

export const WrapperGuild = styled.View`
  flex-direction: row;
  margin: 0 11px;
  align-items: center;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 18px;
`;

export const Title = styled.Text`
  font-family: ${title700};
  color: ${colors.textlight};
  font-size: 18px;
`;

export const Subtitle = styled.Text`
  font-family: ${text400};
  color: ${colors.highlight};
  font-size: 17px;
`;
