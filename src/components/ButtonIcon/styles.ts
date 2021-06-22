import styled from "styled-components/native";
import * as colors from "../../global/constants/colors";
import { RectButton } from "react-native-gesture-handler";

export const WrapperButton = styled(RectButton)`
    width: 46px;
    height: 46px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background: ${colors.primary};
`;