import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { text400, text500, title700 } from "../../global/constants/fonts";
import {RectButton} from 'react-native-gesture-handler'

type TypePlayerProps = {
  color?: string;
};

export const Button = styled(RectButton)`
  padding: 0 16px;
  margin-top: 20px;
  flex-direction: row;
`;

export const AppointmentInfo = styled.View`
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
  justify-content: center;
`;

export const TopLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-family: ${title700};
  color: ${colors.textlight};
  font-size: 18px;
`;

export const Category = styled.Text`
  font-family: ${text400};
  color: ${colors.highlight};
  font-size: 13px;
`;

export const Info = styled.View`
  font-family: ${text400};
  color: ${colors.highlight};
  font-size: 13px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Calendar = styled.View`
  flex-direction: row;
`;

export const Date = styled.Text`
  font-family: ${text500};
  color: ${colors.textlight};
  font-size: 13px;
  margin-left: 8px;
`;

export const Owner = styled.View`
  flex-direction: row;
`;

export const TypePlayer = styled.Text<TypePlayerProps>`
  font-family: ${text400};
  color: ${(props) => (props.color ? props.color : colors.textlight)};
  font-size: 13px;
  margin-left: 8px;
`;
