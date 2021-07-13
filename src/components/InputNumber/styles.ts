import styled from "styled-components/native"
import * as colors from "../../global/constants/colors"
import { text500 } from "../../global/constants/fonts";

export const ContainerInput = styled.View`
  width: 48px;
  height: 48px;
  background: ${colors.secondary40};
  overflow: hidden;
  border-radius: 8px;
  border-color: ${colors.secondary50};
  border-width: 1px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-family: ${text500};
  color: ${colors.textlight};
  font-size: 18px;
  text-align: center;
`;
