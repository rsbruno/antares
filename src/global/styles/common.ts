import styled from "styled-components/native";

//tipagem para uma View
type View = {
  background?: string;
};

//tipagem para um Text
type Text = {
  color?: string;
  size?: number;
  font?: string;
  lineheight?:number;
};

export const Container = styled.View<View>`
  flex: 1;
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
`;

export const Title = styled.Text<Text>`
  color: ${(props) => (props.color ? props.color : "#000")};
  text-align: center;
  font-size: ${(props) => (props.size ? props.size : 16)}px;
  font-family: ${(props) => (props.font ? props.font : "sans")};
  line-height: ${(props) => (props.lineheight ? props.lineheight : 0)}px;
`;
