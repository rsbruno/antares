import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { text400, title700 } from "../../global/constants/fonts";

type StatusProps = {
  status: number;
};

export const Container = styled.View`
  flex-direction: row;
  padding: 0 16px;
  margin-top: 11px;
`;
export const WrapperUserInfo = styled.View`
  margin-left: 15px;
  flex: 1;
  justify-content: center;
`;

export const Name = styled.Text`
  font-family: ${title700};
  color: ${colors.textlight};
  font-size: 18px;
`;

export const ContentStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.status == 1 ? colors.on : colors.primary};
`;

export const StatusText = styled.Text`
  font-family: ${text400};
  color: ${colors.highlight};
  font-size: 13px;
  margin-left: 8px;
`;
