import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { text400, title500, title700 } from "../../global/constants/fonts";
import { getStatusBarHeight } from "react-native-status-bar-height";

export const Head = styled.View`
  margin: ${getStatusBarHeight() + 24}px 16px 0 16px;
  flex-direction: row;
  justify-content: space-between;
`;
export const Hello = styled.View`
    flex: 1;
    padding: 0 20px;

    justify-content: flex-end;
    align-items: flex-start;

`;
export const WrapperName = styled.View`
  flex-direction: row;
`;

export const ContentCategory = styled.View`
  margin-top: 37px;
`;

export const Welcome = styled.Text`
  font-family: ${title500};
  font-size: 24px;
  color: ${colors.textlight};
`;
export const Name = styled.Text`
  font-family: ${title700};
  font-size: 24px;
  color: ${colors.textlight};
`;

export const Subtitle = styled.Text`
  font-family: ${text400};
  font-size: 13px;
  color: ${colors.highlight};
`;