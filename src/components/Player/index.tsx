import React from "react";
import { ImageCustom } from "../ImageCustom";

import {
  Container,
  WrapperUserInfo,
  Name,
  ContentStatus,
  Status,
  StatusText,
} from "./styles";

export type PlayerProps = {
  id: string;
  name: string;
  avatar: string;
  status: number;
};

type Props = {
  data: PlayerProps;
};

export function Player({ data }: Props) {
  return (
    <Container>
      <ImageCustom source={data.avatar} />
      <WrapperUserInfo>
        <Name>{data.name}</Name>
        <ContentStatus>
          <Status status={data.status} />
          <StatusText>{data.status == 1 ? "Disponível" : "Ocupado"}</StatusText>
        </ContentStatus>
      </WrapperUserInfo>
    </Container>
  );
}
