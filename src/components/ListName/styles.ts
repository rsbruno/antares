import styled from "styled-components/native"
import * as colors from "../../global/constants/colors"
import { text400, title700 } from "../../global/constants/fonts";

export const Container = styled.View`
    width: 100%;
    padding: 0 16px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 37px;
`;
export const Title = styled.Text`
  font-family: ${title700};
  color: ${colors.textlight};
  font-size: 18px;
`;
export const Subtitle = styled.Text`
    font-family: ${text400};
  color: ${colors.highlight};
  font-size: 13px;
`;