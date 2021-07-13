import styled from "styled-components/native"
import * as colors from "../../global/constants/colors"
import { title700 } from "../../global/constants/fonts";

type NameProps ={
  ml?:number;
  mr?:number;
}

export const ContentInput = styled.View``;

export const Name = styled.Text<NameProps>`
  color: ${colors.textlight};
  font-size: 18px;
  font-family: ${title700};
  margin-left: ${(props=>props.ml?props.ml:0)}px;
  margin-right: ${(props=>props.mr?props.mr:0)}px;
`;

export const WrapperInput = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
`;