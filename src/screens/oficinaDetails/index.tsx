import React from "react";
import { Text } from "react-native";
import DetailsCard from "../../components/DetailsCard";
import {
  ContainerDetails,
  Description,
  ImagesContainer,
  ImagesText,
  InformationContainer,
  Separator,
  Title,
} from "./styles";

const OficinaDetailsScreen = ({ route }: any) => (
  <ContainerDetails>
    <ImagesContainer>
      <ImagesText>Fotos Oficina</ImagesText>
    </ImagesContainer>
    <InformationContainer>
      <Title>{route.params.Nome}</Title>
      <Description>{route.params.Descricao}</Description>
      <Separator />
      <DetailsCard title={route.params.Endereco} icon="Localizacao" />
      <DetailsCard title={route.params.Email} icon="Email" />
      {route.params.Telefone1 !== null && (
        <DetailsCard title={route.params.Telefone1} icon="Telefone" />
      )}
      {route.params.Telefone2 !== null && (
        <DetailsCard title={route.params.Telefone2} icon="Telefone" />
      )}
    </InformationContainer>
  </ContainerDetails>
);

export default OficinaDetailsScreen;
