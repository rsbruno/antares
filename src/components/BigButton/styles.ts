import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { text500 } from "../../global/constants/fonts";
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  height: 54px;
  background: ${colors.primary};
  border-radius: 8px;
  width: 100%;

  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  flex: 1;
  text-align: center;
  color: ${colors.textlight};
  font-size: 15px;
  font-family: ${text500};
`;