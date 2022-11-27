import React from "react";
import { DetailsCardProps } from "../../types";
import { Container, Icon, IconContainer, Title } from "./styles";

const DetailsCard = ({ title, icon }: DetailsCardProps) => {
  function iconHandler(icon: string) {
    if (icon === "Localizacao") {
      return <Icon source={require("../../assets/icons/mappin.png")} />;
    }

    if (icon === "Email") {
      return <Icon source={require("../../assets/icons/mail.png")} />;
    }

    if (icon === "Telefone") {
      return <Icon source={require("../../assets/icons/phone.png")} />;
    }
  }

  return (
    <Container>
      <IconContainer>{iconHandler(icon)}</IconContainer>
      <Title>{title}</Title>
    </Container>
  );
};

export default DetailsCard;
