import styled from "styled-components/native";
import colors from "../../global/constants/colors";

export const BigButton = styled.TouchableOpacity`
    height: 54px;
    background: ${colors.sencodaryApp};

    flex-direction: row;
    align-items: center;
`;

export const WrapperIcon = styled.View`
    width: 56px;
    height: 56px;
    border-right-width:1px;
    border-right-color: #991F36 ;

    justify-content: center;
    align-items: center;
`;

export const Icon = styled.Image``;

export const Label = styled.Text`
    flex: 1;
    text-align: center;
    color: ${colors.textLight};
    font-size: 15px;
`;