import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { text500 } from "../../global/constants/fonts";
import { RectButton } from 'react-native-gesture-handler';

export const BigButton = styled(RectButton)`
  height: 54px;
  background: ${colors.primary};
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`;

export const WrapperIcon = styled.View`
  width: 56px;
  height: 56px;
  border-right-width: 1px;
  border-right-color: ${colors.line};

  justify-content: center;
  align-items: center;
`;

export const Icon = styled.Image``;

export const Label = styled.Text`
  flex: 1;
  text-align: center;
  color: ${colors.textlight};
  font-size: 15px;
  font-family: ${text500};
`;
