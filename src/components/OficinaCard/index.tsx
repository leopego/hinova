import { useNavigation } from "@react-navigation/native";
import React from "react";
import { OficinaCardProps } from "../../types";

import {
  Container,
  Icon,
  InformationDescription,
  InformationTitle,
  InformationWrapper,
  Location,
  LocationWrapper,
  Logo,
  LogoWrapper,
  RowWrapper,
} from "./styles";

const OficinaCard = ({
  Foto,
  Descricao,
  DescricaoCurta,
  Nome,
  Endereco,
  Email,
  Telefone1,
  Telefone2,
}: OficinaCardProps) => {
  const navigation = useNavigation<any>();

  const Details = {
    Nome: Nome,
    Descricao: Descricao,
    Endereco: Endereco,
    Email: Email,
    Telefone1: Telefone1,
    Telefone2: Telefone2,
  };

  return (
    <Container
      onPress={() => {
        navigation.navigate("OficinaDetailsScreen", Details);
      }}
    >
      <RowWrapper>
        <LogoWrapper>
          <Logo
            source={{ uri: `data:image/jpeg;base64,${Foto}` }}
            resizeMode="stretch"
          />
        </LogoWrapper>
        <InformationWrapper>
          <InformationTitle>{Nome}</InformationTitle>
          <InformationDescription>{DescricaoCurta}</InformationDescription>
        </InformationWrapper>
      </RowWrapper>
      <LocationWrapper>
        <Icon
          source={require("../../assets/icons/mappin.png")}
          resizeMode="contain"
        />
        <Location>{Endereco}</Location>
      </LocationWrapper>
    </Container>
  );
};

export default OficinaCard;
