import styled from "styled-components/native"
import * as colors from "../../global/constants/colors"
import { title700 } from "../../global/constants/fonts";

export const Container = styled.View`
    width: 100%;
    margin: 12px 0;
`;

export const Label = styled.Text`
    text-align: center;
    font-family: ${title700};
    color: ${colors.textlight};
    font-size: 14px;
`;