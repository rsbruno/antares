import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { title700 } from "../../global/constants/fonts";

type NameProps = {
  title: string;
};

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

export const WrapperImputs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

export const TextArea = styled.TextInput`
  height: 95px;
  background: ${colors.secondary40};
  overflow: hidden;
  border-radius: 8px;
  border-color: ${colors.secondary50};
  border-width: 1px;
  margin-top: 12px;
  color: ${colors.textlight};
  font-size: 14px;
  padding: 8px;
`;

export const Footer = styled.View`
  margin: 12px 0 56px 0;
`;