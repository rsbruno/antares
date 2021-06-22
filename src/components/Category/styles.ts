import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { title700 } from "../../global/constants/fonts";

export const Button = styled.TouchableOpacity`
  width: 104px;
  height: 120px;
  margin: 0 4px;
  overflow: hidden;
  border-radius: 8px;
`;
export const WrapperContent = styled.View`
  width: 100%;
  height: 100%;
  background: transparent;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.View`
  width: 100px;
  height: 116px;
  overflow: hidden;
  border-radius: 8px;
`;
export const Main = styled.View`
  width: 100%;
  height: 100%;
  background: transparent;
  overflow: hidden;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 30px;
  height: 50px;
 
`;
export const Label = styled.Text`
  color: ${colors.textlight};
  margin-top: 20px;
  font-family: ${title700};
`;
