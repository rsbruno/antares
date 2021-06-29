import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native"
import * as colors from "../../global/constants/colors"
import { text400, title700 } from "../../global/constants/fonts";

export const ActionButton = styled(RectButton)`
    padding: 14px;
    border-radius: 8px;
    overflow: hidden;
`;

export const Banner = styled.ImageBackground`
    height: 234px;
`;

export const WrapperText = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding: 0 24px;
    padding-bottom: 20px;
`;

export const Title = styled.Text`
    font-family: ${title700};
    color: ${colors.textlight};
    font-size: 28px;
`;

export const Description = styled.Text`
    font-family: ${text400};
    color: ${colors.textlight};
    font-size: 13px;
`;

export const Footer = styled.View`
    bottom: 22px;
    padding:  0 18px;
    width: 100%;
`;