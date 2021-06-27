import React from "react";
import { Categories } from "../../utils/Categories";
import { ImageCustom } from "../ImageCustom";
import CalendarSVG from "../../assets/calendar.svg";
import PlayerSVG from "../../assets/player.svg";

import {
  Container,
  Name,
  TopLine,
  Category,
  AppointmentInfo,
  Info,
  Date,
  Calendar,
  Owner,
  TypePlayer,
} from "./styles";

import { primary, on } from "../../global/constants/colors";

type GuildProps = {
  id: string;
  name: string;
  icon: any;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = {
  data: AppointmentProps;
};

export function Appointment({ data }: Props) {
  const [{ title: category }] = Categories.filter((item) => {
    return item.id == parseInt(data.category);
  });

  return (
    <Container>
      <ImageCustom />
      <AppointmentInfo>
        <TopLine>
          <Name>{data.guild.name}</Name>
          <Category>{category}</Category>
        </TopLine>

        <Info>
          <Calendar>
            <CalendarSVG />
            <Date>{data.date}</Date>
          </Calendar>

          <Owner>
            <PlayerSVG fill={data.guild.owner ? primary : on} />
            <TypePlayer color={data.guild.owner ? primary : on}>
              {data.guild.owner ? "Anfitrião" : "Visitante"}
            </TypePlayer>
          </Owner>
        </Info>
      </AppointmentInfo>
    </Container>
  );
}
