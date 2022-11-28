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

const OficinaDetailsScreen = ({ route }: any) => {
  const { Nome, Descricao, Endereco, Email, Telefone1, Telefone2 } =
    route.params;

  return (
    <ContainerDetails>
      <ImagesContainer>
        <ImagesText>Fotos Oficina</ImagesText>
      </ImagesContainer>
      <InformationContainer>
        <Title>{Nome}</Title>
        <Description>{Descricao}</Description>
        <Separator />
        <DetailsCard title={Endereco} icon="Localizacao" />
        <DetailsCard title={Email} icon="Email" />
        {Telefone1 !== null && (
          <DetailsCard title={Telefone1} icon="Telefone" />
        )}
        {Telefone2 !== null && (
          <DetailsCard title={Telefone2} icon="Telefone" />
        )}
      </InformationContainer>
    </ContainerDetails>
  );
};

export default OficinaDetailsScreen;
