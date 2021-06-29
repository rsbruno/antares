import { BorderlessButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { title700 } from "../../global/constants/fonts";

export const Content = styled.View`
  margin-top: ${getStatusBarHeight()}px;
  padding: 17px 0;

  align-items: center;
  flex-direction: row;
`;

export const WrapperBack = styled(BorderlessButton)`
    position: absolute;
    left: 15px;
    padding: 10px;
    border-radius: 8px;
    overflow: hidden;
`;
export const WrapperAction = styled.View`
    position: absolute;
    right: 18px;
`;

export const Title = styled.Text`
  font-family: ${title700};
  color: ${colors.textlight};
  font-size: 20px;
  text-align: center;
  flex: 1;
`;
