import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { title700 } from "../../global/constants/fonts";

export const Form = styled.View`
  padding: 0 16px;
`;
export const Select = styled.View`
  border-color: ${colors.secondary50};
  border-width: 1px;
  border-radius: 8px;
  flex-direction: row;
  margin-top: 32px;
`;
export const NoImage = styled.View`
  width: 64px;
  height: 68px;
  overflow: hidden;
  border-radius: 8px;
  background: ${colors.secondary40};
  border-color: ${colors.secondary50};
  border-width: 1px;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  padding-right: 33px;
`;

export const Label = styled.Text`
  font-family: ${title700};
  color: ${colors.textlight};
  font-size: 18px;
  flex: 1;
  text-align: center;
`;